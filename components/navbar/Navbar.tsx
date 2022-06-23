import Link from "next/link";
import { createRef, useRef, useState } from "react";
import Logo from "../Logo";
import WidthLimiter from "../WidthLimiter";
import styles from './navbar.module.css'

export default function Navbar() {
  const [hamSubMenuHidden, setHamSubMenuHidden] = useState("hidden")

  
  const handleHam = () => {
    console.log("Hamburger Clicked");
    setHamSubMenuHidden(hamSubMenuHidden === "hidden" ? "" : "hidden");
    /*
    if ham is hidden
      set ham to not hidden
      return ""
    else (has is not hidden)
      set ham to hidden
      return "hidden"
    */
  }

  const handleCart = () => {
    console.log("Cart Clicked");
  }
  
  const handleNavContainer = () => {
    
  }

  const handleAccount = () => {
    console.log("Account Clicked");
  }
  return (
    <>
      <nav className="bg-[#FD7676] text-[#FDFDFD] font-Lato font-normal shadow-md">
        <WidthLimiter paddingAll={ false } customPadding={ false }>
          {/* flex */}
          <div className="flex items-center justify-between">
            {/* hamburger wrapper (left side) */}
            <div className="inline-flex sm:hidden gap-4">
              {/* hamburger */}
              <div className={`${hamSubMenuHidden === "hidden" ? "" : "hidden"} ${styles.navItemContainer} group`}>
                <button className={styles.navItem} onClick={handleHam}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              {/* X button */}
              <div className={`${hamSubMenuHidden} ${styles.navItemContainer} group`}>
                <button className={styles.navItem} onClick={handleHam}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              {/* invisible hamburger to center the logo */}
              <div className={styles.navItemContainer}>
                <button className={`${styles.navItem} hover:cursor-auto`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="opacity-0 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            {/* logo */}
            <div className={styles.navItemContainer}>
              <Link href="/"><a>
                <Logo />
              </a></Link>
            </div>
            {/* right side */}
            <div className="inline-flex items-center gap-4 sm:gap-8">

              {/* hidden on mobile */}
              <div className="hidden sm:inline-flex gap-16 pr-10 items-center">

                {/* delights container */}
                <div className={`${styles.navItemContainer} group p-[6px]`}>
                  {/* delights link */}
                  <Link href="#"><a className={`${styles.navItem} inline-flex items-center`}>
                    <div className={`${styles.underLine} inline-flex gap-1`}>
                      {/* delights text */}
                      <span>Delights</span>
                      {/* arrow */}
                      <svg className="group-hover:-rotate-180 transition-transform mt-1 h-7 w-7" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </a></Link>

                  {/* delights comp sub menu */}
                  <div className="delights-sub-menu sm:hidden sm:group-hover:inline-flex sm:group-hover:opacity-100 fixed w-screen min-w-full z-50 top-[6.84rem] shadow-md left-0 bg-gradient-to-b from-[#FF8E8E] to-[#FFA8A8]">
                    <WidthLimiter paddingAll={ false } customPadding={ true }>
                      <div className="pb-4 pt-2">
                        <DelightsSubMenuComp
                          salads={['Tossed', 'Composed', 'Bound']}
                          sandwiches={['Vegetarian', 'Chicken & Beef', 'Fish', 'Grilled Cheese', 'Egg Based']}
                          soups={['Noodle', 'Seafood', 'Vegetarian']}
                          snacks={['Chips', 'Cookies', 'Savory', 'Sweets', 'Frozen']}
                          drinks={['PH Water', 'Soda', 'Milk', 'Seltzer']}
                        />
                      </div>
                    </WidthLimiter>
                  </div>
                </div>

                {/* about link */}
                <div className={styles.navItemContainer}>
                  <Link href="#"><a className={`${styles.navItem} inline-flex items-center ml-2`}>
                    <div className={styles.underLine}>
                      About
                    </div>
                  </a></Link>
                </div>
              </div>
              {/* Log in */}
              <div className={styles.navItemContainer} onMouseDown={handleNavContainer}>
                <button className={`${styles.navItem} inline-flex flex-col items-center justify-center`} onClick={handleAccount}>
                  <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" strokeWidth="2" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
                    <g><path d="M500,10C231.5,10,10,231.5,10,500s221.5,490,490,490s490-221.5,490-490S768.5,10,500,10z M795.3,835.6c0-134.2-100.7-248.4-221.5-281.9c73.8-26.8,120.8-100.7,120.8-181.2c0-107.4-87.3-194.7-194.7-194.7s-194.7,87.3-194.7,194.7c0,80.5,53.7,154.4,120.8,181.2c-127.5,33.6-221.5,147.7-221.5,281.9C110.7,755.1,50.3,634.2,50.3,500C50.3,251.6,251.6,50.3,500,50.3c248.4,0,449.7,201.4,449.7,449.7C949.7,634.2,889.3,755.1,795.3,835.6z"/></g>
                  </svg>
                  {/* hide text on mobile */}
                  <span className="hidden sm:inline-block text-[0.95rem]">
                    Log In
                  </span>
                </button>
              </div>
              {/* cart */}
              <div className={styles.navItemContainer}>
                <button className={`${styles.navItem} inline-flex flex-col items-center justify-center`} onClick={handleCart}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {/* hide text on mobile */}
                  <span className="hidden sm:inline-block text-[0.95rem]">
                    Cart
                  </span>
                </button>
              </div>
            </div>
          </div>
        </WidthLimiter>
        
        <div className={`${hamSubMenuHidden} sm:hidden ${styles.mobileSubMenu}`}>
          <WidthLimiter paddingAll={ false } customPadding={ true }>
            {/* padding */}
            <div className="px-16 py-2 text-[1.35rem]">
              {/* delights container */}
              <div className={`group animate-slide-right ${styles.mobileSubItemContainer}`}>
                {/* delights button */}
                <button className="flex items-center gap-1">
                  {/* delights text */}
                  <span>Delights</span>
                  {/* arrow */}
                  <svg className="group-focus-within:-rotate-180 transition-transform h-6 w-6" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* delights mobile sub menu */}
                <div className={`${styles.mobileSubMenuContainer} hidden group-focus-within:inline-flex flex-col ml-6 text-xl space-y-1`}>
                  <Link href="#"><a className={`animate-slide-right ${styles.mobileSubMenuItem}`}>
                    All Delights
                  </a></Link>
                  <Link href="#"><a className={`animate-slide-right ${styles.mobileSubMenuItem}`}>
                    Salads  
                  </a></Link>
                  <Link href="#"><a className={`animate-slide-right ${styles.mobileSubMenuItem}`}>
                    Sandwiches  
                  </a></Link>
                  <Link href="#"><a className={`animate-slide-right ${styles.mobileSubMenuItem}`}>
                    Soups  
                  </a></Link>
                  <Link href="#"><a className={`animate-slide-right ${styles.mobileSubMenuItem}`}>
                    Snacks  
                  </a></Link>
                  <Link href="#"><a className={`animate-slide-right ${styles.mobileSubMenuItem}`}>
                    Drinks  
                  </a></Link>
                </div>
              </div>

              {/* about link */}
              <div className={`animate-slide-right ${styles.mobileSubItemContainer}`}>
                <Link href="#"><a>
                  About
                </a></Link>
              </div>
            </div>
          </WidthLimiter>
        </div>
      </nav>
    </>
  )
}

type props = {
  salads: string[];
  sandwiches: string[];
  soups: string[];
  snacks: string[];
  drinks: string[];
}

function DelightsSubMenuComp({ salads, sandwiches, soups, snacks, drinks}: props) {
  return (
    <div className={`${styles.subMenuContainer} flex flex-row items-start justify-center sm:space-x-[1.5rem] md:space-x-[5rem] lg:space-x-[7.5rem] pb-[.8rem] pt-[.5rem]`}>
      {/* Salads */}
      <Link href="#"><a className={`mx-auto animate-slide-up ${styles.subMenuBlock} space-y-[.4rem]`}>
        <SubHeaderItem header={"SALADS"} />
        <div className="space-y-[.4rem]">
          {salads.map(salad => <SubMenuItem key={salad} name={salad} />)}
        </div>
      </a></Link>
      
      {/* Sandwiches */}
      <Link href="#"><a className={`mx-auto animate-slide-up ${styles.subMenuBlock} space-y-[.4rem]`}>
        <SubHeaderItem header={"SANDWICHES"} />
        <div className="space-y-[.4rem]">
          {sandwiches.map(sandwich => <SubMenuItem key={sandwich} name={sandwich} />)}
        </div>
      </a></Link>

      {/* Soups */}
      <Link href="#"><a className={`mx-auto animate-slide-up ${styles.subMenuBlock} space-y-[.4rem]`}>
        <SubHeaderItem header={"SOUPS"} />
        <div className="space-y-[.4rem]">
          {soups.map(soup => <SubMenuItem key={soup} name={soup} />)}
        </div>
      </a></Link>

      {/* Snacks */}
      <Link href="#"><a className={`mx-auto animate-slide-up ${styles.subMenuBlock} space-y-[.4rem]`}>
        <SubHeaderItem header={"SNACKS"} />
        <div className="space-y-[.4rem]">
          {snacks.map(soup => <SubMenuItem key={soup} name={soup} />)}
        </div>
      </a></Link>

      {/* Drinks */}
      <Link href="#"><a className={`mx-auto animate-slide-up ${styles.subMenuBlock} space-y-[.4rem]`}>
        <SubHeaderItem header={"DRINKS"} />
        <div className="space-y-[.4rem]">
          {drinks.map(drink => <SubMenuItem key={drink} name={drink} />)}
        </div>
      </a></Link>
    </div>
  )
}

type subHeaderProps = {
  header: string;
}
function SubHeaderItem({ header }: subHeaderProps) {
  return (
    <h3 className={`${styles.subMenuHeader} text-white mt-3 mb-5 sm:my-1 text-lg relative`}>{header}</h3>
  );
}

type subItemsProps = {
  name: string;
}
function SubMenuItem({ name }: subItemsProps) {
  return (
    <p className={`${styles.subMenuItem} text-white text-base`}>{name}</p>
  );
}
