import { Checkbox, CheckboxGroup, CheckboxProps, Divider, RangeSlider, Slider } from "@mantine/core";
import { useEffect, useState } from "react";
import styles from "./filter.module.css";

type FilterProps = {
  typeValue: string[],
  setTypeValue: (val: string[]) => void,
  sliderValue: number,
  setSliderValue: (val: number) => void,
}

export default function Filter({ typeValue, setTypeValue, sliderValue, setSliderValue }: FilterProps) {
  return (
    // left filter container
    <div className="hidden sm:inline-flex w-[25%] lg:w-[20%] fixed h-full bg-[#FFCACA]">
    {/* left filter */}
    <div className={`w-[75%] h-screen flex flex-col group ${styles.subMenuContainer} `}>
      {/* type wrapper */}
      <div className={`w-full text-white font-Lato text-[24px] px-2 pb-1 border-b-[1px] border-r-[1px] border-white`}>
        {/* type button */}
        <button className="w-full inline-flex flex-row items-center justify-between pb-2">
          <h3>TYPE</h3>
          {/* svg wrapper */}
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-focus-within:-rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* submenu */}
        <div tabIndex={0} className={`${styles.subMenuTransition}  flex-col space-y-5`}>
          <CheckboxGroup
            defaultValue={[]}
            value={typeValue}
            onChange={event => setTypeValue(event)}
            orientation="vertical"
            color="truePink"
            style={{
              paddingBottom: "0.75rem"
            }}
          >
            <Checkbox value="sandwiches" label={
              <p className="text-white select-none md:text-[1.30rem] cursor-pointer">Sandwiches</p>}/>
            <Checkbox value="salads" label={
              <p className="text-white select-none md:text-[1.30rem] cursor-pointer">Salads</p>}/>
            <Checkbox value="soups" label={
              <p className="text-white select-none md:text-[1.30rem] cursor-pointer">Soups</p>}/>
            <Checkbox value="snacks" label={
              <p className="text-white select-none md:text-[1.30rem] cursor-pointer">Snacks</p>}/>
            <Checkbox value="drinks" label={
              <p className="text-white select-none md:text-[1.30rem] cursor-pointer">Drinks</p>}/>
          </CheckboxGroup>
        </div>
      </div>

      {/* price wrapper */}
      <div className={`w-full text-white font-Lato text-[24px] px-2 pb-1 border-b-[1px] border-r-[1px] border-white`}>
        {/* price button */}
        <button className="w-full inline-flex flex-row items-center justify-between pb-2">
          <h3>PRICE</h3>
          {/* svg wrapper */}
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-focus-within:-rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {/* submenu */}
        <div tabIndex={0} className={`${styles.subMenuTransition} group-focus-within:pb-5 group-focus-within:overflow-visible flex-col space-y-5`}>
          <Slider 
            color="truePink"
            precision={1} 
            step={0.1}
            showLabelOnHover={true} 
            min={0.0} 
            max={20.0} 
            value={sliderValue} 
            label={(value) => `$${value}`}
            onChange={setSliderValue} 
            marks={[
              {value: 0, label: '$0'},
              {value: 5, label: '$5'},
              {value: 10, label: '$10'},
              {value: 15, label: '$15'},
              {value: 20, label: '$20'},
            ]}
          />
        </div>
      </div>

    </div>
  </div>
  )
}