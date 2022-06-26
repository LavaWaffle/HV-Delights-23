import WidthLimiter from "../components/WidthLimiter";
import styles from '../styles/index.module.css';
import Image from 'next/image';
import { useViewportSize, useHover } from "@mantine/hooks";
import { useEffect, useState } from "react";
import DelightModal from "../components/DelightsModal/DelightModal"

export default function HomePage() {
  const { hovered, ref } = useHover();
  const [productModal, setProductModal] = useState(false);

  function handleClose() {
    setProductModal(false);
  }
  
  const handleModal = () => {
    if (productModal == false) {
      setProductModal(true)
    } else {
      setProductModal(false)
    }
  }
  
  const productDetailProps = {
    title :"Chicken & Avacado Sandwich",
    imagePath : "/temp/",
    description: "Our specialty gourmet Chicken Avocado Sandwich, packed with delight. If your having a party, a dozen or so can make sure everyone has a delightful time!",
    ingredients: "Chicken, Avocado, Tomato, Sourdough, Lettuce, Argula",
    productFacts : 
    `362 calories
    6.6g total carbs
    41g net carbs
    12g fat
    20g protein`,
    price : 3.39
  }

  return (
    <>
      <div className="">
        {productModal === true && <DelightModal productDetailProps={productDetailProps} closeCart={handleClose} />}
      </div>
      <section className="bg-[#FAD4D4]">
        <WidthLimiter paddingAll={true} customPadding={false}>
          {/* flex */}
          <div className="flex flex-col-reverse items-center sm:flex-row justify-around">
            {/* left (button and text) */}
            <div className="mt-[1rem] sm:mt-0">
              <h1 className="text-[#D97777] font-Oswald text-6xl sm:text-5xl md:text-6xl">
                <div className="leading-[5rem] sm:leading-[4.5rem] md:leading-[5.3rem]">
                  School lunches and <br /> Catering changed  <br /> <span className="text-[#DA5757]">FOREVER</span>
                </div>
              </h1>
              <div className="flex relative justify-end items-center gap-8">
                <svg className="hidden sm:inline-flex -rotate-[17deg] -mt-3" width="150" height="100" viewBox="0 0 179 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M154.58 127.026C161.215 120.912 169.965 112.49 175.372 105.446M175.372 105.446C175.996 104.634 168.643 102.076 168.294 101.986C160.636 100.005 152.948 99.061 145.091 98.2628M175.372 105.446C132.71 130.148 82.9634 123.733 60.8758 96.784C58.6867 94.113 56.3069 91.2037 54.2029 88.1005M54.2029 88.1005C50.8523 83.1587 48.2013 77.7254 48.1341 71.9807C48.0724 66.6789 50.2833 59.7477 55.2073 56.9676C64.4058 51.7746 75.171 60.6546 73.9174 70.5667C72.816 79.2772 63.1109 88.11 54.2029 88.1005ZM54.2029 88.1005C54.015 88.1003 53.8274 88.0962 53.6403 88.0881C8.47976 86.1197 -5.52841 36.141 9.71637 3.29341" stroke="black" strokeWidth="5.58817" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <button className={`${styles.textShadow} font-Piazzolla text-3xl sm:text-4xl md-5xl p-3 ${styles.rippleBgCustom} text-[#F47C7C] ${styles.dropShadowButton}`} onClick={() => handleModal()}>
                  SHOP
                </button>
              </div>
            </div>

            {/* right (img) */}
            <div className="relative w-[350px] sm:w-[220px] md:w-[275px] lg:w-[350px] h-[350px]">
              <svg className="bottom-7 w-[100%]" viewBox="0 0 662 644" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M356.671 28.5749C395.82 34.0396 438.71 20.4334 473.525 38.9111C508.314 57.375 518.873 101.527 546.532 129.341C577.076 160.056 626.164 173.133 645.395 211.742C664.678 250.456 667.871 299.689 651.253 339.586C634.52 379.756 576.691 389.26 555.576 427.371C532.212 469.54 554.592 528.345 525.367 566.799C496.488 604.799 445.96 621.495 399.248 633.069C350.98 645.029 299.104 649.204 251.578 634.636C204.494 620.204 169.757 582.742 132.222 551.221C95.4174 520.314 54.3069 492.371 31.8835 450.145C9.41232 407.829 -8.93744 356.833 4.64846 310.986C18.6878 263.608 75.0985 242.599 105.096 203.081C126.876 174.387 137.976 140.386 157.224 109.982C180.291 73.5451 190.247 21.4186 230.502 4.98805C270.489 -11.3332 313.82 22.5933 356.671 28.5749Z" fill="#F4E5E5"/>
              </svg>
              <div className="w-[80%] h-[300px] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <Image
                  src="/index/foodImage.png"
                  height="220px"
                  width="220px"
                  layout='responsive'
                />
              </div>
            </div>
          </div>
        </WidthLimiter>
      </section>

      {/* how it works */}
      <section className="bg-[#FDACAC]">
        <WidthLimiter paddingAll={false} customPadding={true}>
          {/* padding */}
          <div className="py-[3.25rem]">
            {/* grid */}
            <div className="grid justify-items-center mb-1">
              <h1 className={`font-light font-Oswald px-[2.75rem] text-6xl text-white ${styles.howLines}`}>
                How It Works
              </h1>
            </div>
          </div>
        </WidthLimiter>
      </section>

      {/* order recieve experience */}
      <section className="bg-[#FFCECE]">
        <WidthLimiter paddingAll={true} customPadding={false}>
          {/* grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center text-center">
            <HowCard 
              src="/index/order.svg"
              title="Order"
              description="and get a lunch filled with our delights."
              flipped={true}
            />
            <HowCard 
              src="/index/recieve.svg"
              title="Recieve"
              description="authentic food packaged with care and delivered straight to you."
              flipped={false}
            />
            <HowCard 
              src="/index/experience.svg"
              title="Experience"
              description="the nutritious and yummy taste of our delights."
              flipped={true}
            />
          </div>
        </WidthLimiter>
      </section>

      {/* featured by */}
      <section className="bg-[#FDACAC] relative">
        {/* background hv */}
        {/* center abs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-screen overflow-hidden text-center">
            {/* HV */}
            <h1 className="select-none font-Lato font-extralight overflow-hidden text-white text-[350px] sm:text-[500px] md:text-[600px] lg:text-[700px] opacity-20 -z-50">
              HV
            </h1>
          </div>
        </div>
        <WidthLimiter paddingAll={true} customPadding={false}>
          {/* extra padding */}
          <div className="pt-[2rem] sm:pb-[6rem] w-full">
            {/* flex */}
            <div className="flex flex-col items-center space-y-5">
              <div className="font-Lato font-light text-3xl">
                FEATURED BY
              </div>
              {/* fbla and hvrsd sponsers  */}
              <div className="w-full flex flex-wrap justify-center basis-[51%] sm:basis-[34%] gap-0">
                {/* FBLA */}
                <div className="w-[100%] h-[250px] sm:w-[34%] sm:ml-[6%] justify-center flex">
                  <div className="w-[16rem] text-end brightness-150">
                    <Image
                      src="/index/sponserFBLA.png"
                      width={432}
                      height={410}
                      layout="intrinsic"
                    />
                  </div>
                </div>
                {/* HVRSD */}
                <div className="w-[100%] sm:w-[34%] h-[250px] sm:ml-[10%] inline-flex items-center justify-center space-x-10">
                  <div className="w-[8rem]">
                    <Image
                      src={"/index/sponserHVRSD.png"}
                      width={127}
                      height={108}
                      layout="intrinsic"
                    />
                  </div>
                  <h3 className="font-Ledger text-white text-4xl sm:text-3xl md:text-4xl lg:text-5xl">
                    HVRSD
                  </h3> 
                </div>
                {/* SPIKE */}
                <div className="w-[100%] h-[250px] items-center inline-flex justify-center space-x-5">
                  <div className= "w-[8rem] sm:w-[8rem]">
                    <Image
                      src="/index/sponserSPIKE.png"
                      width={201}
                      height={180}
                      layout="responsive"
                    />
                  </div>
                  <h3 className="font-Lexend text-white text-4xl sm:text-3xl md:text-4xl lg:text-5xl">
                    SPIKE 293
                  </h3> 
                </div>
               </div>
            </div>
          </div>
        </WidthLimiter>
      </section>
      
      {/* see for yourself */}
      <section className="bg-[#FDACAC]">
        <WidthLimiter paddingAll={true} customPadding={false}>
          <div className={`flex flex-row w-[100%] h-[500px]`}>
            <div className={`relative w-full h-full sm:inline-flex justify-center`}>
              {/* image container */}
              <div className={`inline-flex sm:block ${styles.hoverContainer} bg-[#D6A6A6] border-[#D6A6A6] border-[0.65rem] relative w-full h-[530px] sm:w-[1000px] md:w-[45%] sm:h-[90%] sm:mr-[14rem] lg:mr-[15rem] -mt-[5.5rem]`}>
                {/* image */}
                <div ref={ref} className={`w-full h-full ${styles.image}`}>
                
                </div>
              </div>
              <div className="sm:absolute mt-[2rem] sm:mt-0 bottom-[8.5rem] right-[1.25rem] sm:w-[50%] sm:h-[45%] z-10">
                {/* container */}
                <div className="bg-[#FAD4D4]">
                  {/* flex */}
                  <div className="inline-flex flex-col py-[1rem] px-[2rem] items-start justify-center">
                    {/* title */}
                    <h1 className="font-light font-Lato text-[3rem]">
                      See for yourself
                    </h1>
                    {/* desc */}
                    <p className="font-Lato text-[#CC0303] text-[1.25rem] mt-[2rem] mb-[3rem]">
                      HVDelights offers a unique experience as our Delights are made, packaged, and delivered with proper care.
                    </p>
                    {/* btn */}
                    <button className={`w-[80%] font-Piazzolla font-light tracking-[.05em] text-3xl sm:text-3xl md-4xl p-3 md:p-5 ${styles.rippleBgCustom} text-[#F47C7C] ${styles.dropShadowButton}`}>
                      Order my Delight
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WidthLimiter>
      </section>
      
      {/* review */} 
      <section className="bg-[#FDACAC] sm:pt-[15rem] lg:pt-[6rem]">
        <div className="grid justify-items-center font-Lora font-normal">
          <h4 className={`${styles.startQuote} text-[1.5rem] sm:text-[3rem] text-center text-white`}>
            I am always excited to order <br /> from HVDelights. The food is <br />always so yummy and <br />authentic!
          </h4>
          <div className="rating space-x-3  mt-[1rem] sm:mt-[2rem]">
            <input readOnly type="radio" name="rating-8" className="h-[2.5rem] w-[2.5rem] sm:h-[3rem] sm:w-[3rem] mask mask-star-2 bg-[#FF0000]" />
            <input readOnly type="radio" name="rating-8" className="h-[2.5rem] w-[2.5rem] sm:h-[3rem] sm:w-[3rem] mask mask-star-2 bg-[#FF0000]" />
            <input readOnly type="radio" name="rating-8" className="h-[2.5rem] w-[2.5rem] sm:h-[3rem] sm:w-[3rem] mask mask-star-2 bg-[#FF0000]" />
            <input readOnly type="radio" name="rating-8" className="h-[2.5rem] w-[2.5rem] sm:h-[3rem] sm:w-[3rem] mask mask-star-2 bg-[#FF0000]" />
            <input readOnly type="radio" name="rating-8" className="h-[2.5rem] w-[2.5rem] sm:h-[3rem] sm:w-[3rem] mask mask-star-2 bg-[#FF0000]" checked />
          </div> 
          <h2 className="font-Berkshire text-[1.5rem] sm:text-[3rem] text-white">
            - Scott A
          </h2>
        </div>
      </section>


      {/* community commitment */}
      <section className="bg-[#FDACAC] pt-[5rem]">
        <WidthLimiter paddingAll={ true } customPadding={ false }>
          {/* flex */}
          <div className="flex flex-col-reverse sm:flex-row items-center gap-3 sm:gap-0 sm:justify-around">
            {/* left (words) */}
            <div className="w-[95%] sm:w-[45%] md-[35%] lg:w-[40%] space-y-[25px] mb-11 flex-col flex lg:gap-10">
              <h1 className={`${styles.ourCommunity} font-Oswald text-black`}>
                Our commitment to <br/>our community
              </h1>

              <p className="font-Lato font-light tracking-[.07em] text-[35px] sm:text-[27px] w-full leading-[2.5rem] desk:text-[30px]">
                When you’re ordering from HVDelights, you are supporting the local farmers in NJ and keep their businesses alive. 
              </p>

              <button className={`w-[80%] font-Piazzolla font-light tracking-[.05em] text-3xl sm:text-4xl md-4xl p-3 md:p-5 ${styles.rippleBgCustom} text-[#F47C7C] ${styles.dropShadowButton}`}>
                Order my Delight
              </button>
            </div>
            
            {/* right (img) */}
            <div className="w-[75%] sm:w-[35%]">
              <Image
                src="/index/Our community Img.png"
                height="42.5%"
                width="35%"
                layout='responsive'
              />
            </div>
          </div>
        </WidthLimiter>
      </section>
    </>
  );
}

type howProps = {
  src: string;
  title: string;
  description: string;
  flipped: boolean;
}

function HowCard({ src, title, description, flipped }: howProps) {
  return (
    // width limiter
    <div className="w-3/4">
      {/* flex */}
      <div className={`flex  items-center ${(false === flipped ? "flex-col" : "flex-col sm:flex-col-reverse mt-[2rem]")} gap-0`}>
        {/* image wrapper */}
        <div className="aspect-square w-full overflow-hidden">
          <Image
            src={src}
            height={5}
            width={5}
            layout='responsive'
          />
        </div>

        {/* text wrapper */}
        <div className={`inline-flex flex-col text-center space-y-4`}>
          <h3 className="text-5xl font-Lato font-light">
            {title}
          </h3>
          <p className="text-xl font-Lato font-medium text-[#CC0303]">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}