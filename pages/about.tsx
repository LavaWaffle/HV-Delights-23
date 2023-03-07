import WidthLimiter from "../components/WidthLimiter";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* about */}
      <section className="bg-gradient-to-b from-[#FFE7E7] via-[#FFB0B0] to-[#FF6A6A]">
        <WidthLimiter paddingAll={ false } customPadding={ false }>
          {/* extra padding */}
          <div className="pb-10 pt-4">
            {/* flex */}
            <div className="flex flex-col lg:flex-row justify-center space-x-5">
              {/* left (our story) */}
              <div className="flex flex-col items-start lg:items-start space-y-[5rem] lg:w-[35%]">
                {/* our story text */}
                <div className="text-center">
                  <h1 className="lg:text-left font-Oswald font-semibold text-[3rem]">
                    Our story
                  </h1>
                  <p className="font-Oswald font-light bg-[#F4E5E5] lg:w-[75%] text-[1.5rem] p-[10px]">
                    After learning about cuisine all over the world, our founder, Kai, was ecstatic and shared many of his delicacies with friends.
                  </p>
                </div>
                {/* our story img */}
                <div className="mx-auto sm:mx-0 w-[350px] h-[350px] relative">
                  {/* happy kai img wrapper */}
                  <div className="z-20 md:w-full lg:w-[80%] h-[300px] lg:absolute md:top-[50%] md:left-[50%] sm:ml-5 lg:ml-0 -mt-5 lg:-mt-0 lg:-translate-x-[50%] lg:-translate-y-[35%]">
                    <div className="rounded-[45%] overflow-hidden">
                      <Image
                        src="/about/happyKai.png"
                        height={481}
                        width={599}
                        layout="responsive"
                      />
                    </div>
                  </div>
                  {/* line (up to down) wrapper */}
                  <div className="hidden lg:block absolute -top-[5.5rem] left-[20%] z-0">
                    <svg width="81" height="207" viewBox="0 0 81 207" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M76.5 3.5C19.7 99.5 5.5 178.833 5.5 206.5" stroke="white" opacity="0.75" strokeWidth="10"/>
                    </svg>
                  </div>
                </div>
              </div>
              {/* right (what makes us special) */}
              <div className="relative flex sm:block flex-col-reverse md:flex-col items-start space-y-7 lg:pl-[3.75rem] lg:w-[35%] -mt-[5rem] sm:-mt-[15rem] lg:mt-8">
                {/* cooking kai img wrapper */}
                <div className="relative w-[350px] mt-[2.25rem] sm:mt-0 ml-auto mr-auto sm:mr-0">
                  <div className="rounded-[45%] overflow-hidden z-10">
                    <Image
                      src="/about/cookingKai.png"
                      height={481}
                      width={638}
                      layout="responsive"
                    />
                  </div>
                  {/* line (up to down) wrapper */}
                  <div className="hidden lg:block absolute scale-110 top-[85%] md:rotate-[25deg] xl:rotate-[15deg] md:left-[70%] xl:left-[80%]">
                    <svg width="45" height="231" viewBox="0 0 45 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 16.00012C63.5 105.5 36.5 169 24 194" stroke="white" opacity="0.75" strokeWidth="10"/>
                    </svg>
                  </div>
                </div>

              {/* line (left to right) wrapper */}
              <div className="hidden sm:block absolute top-[-13rem] lg:-top-1  right-[45%] sm:right-0 sm:left-[35%] lg:left-[-4rem] z-0">
                {/* line */}
                <svg className="rotate-[245deg] lg:rotate-[15deg]" width="91" height="528" viewBox="0 0 91 528" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M89.0667 5.32768C-38.2869 30.0252 22.5086 245.814 65.514 348.055C130.17 501.768 8.75672 529.883 4.94393 521.33" stroke="#FFFFFF" opacity="0.75" strokeWidth="10"/>
                </svg>
              </div>

                {/* whats makes us special text */}
                <div className="text-center lg:text-left">
                  <h1 className="lg:leading-[3.5rem] mb-[.5rem] font-Oswald font-semibold text-[2rem] lg:text-[2.75rem]">
                    What makes us special?
                  </h1>
                  <p className="font-Oswald font-light bg-[#F4E5E5] lg:w-[85%] text-[1.5rem] p-[10px]">
                    We work in Hopewell which allows us to make sure our customers are able to get the cuisine they want!   
                  </p>
                </div>
              </div>
            </div>

            {/* happy kid */}
            <div className="flex flex-col items-center justify-center mt-8 lg:mt-0">
              <div className="text-center w-[75%]">
                <h1 className="font-Oswald font-semibold">
                  We believe that all students deserve to get nutritious food at an affordable price.
                </h1>
                <div className="flex items-center justify-center mt-5">
                  <div className="w-[75%]">
                    <Image
                      src="/about/happyKid.png"
                      width={805}
                      height={482}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WidthLimiter>
      </section>
    </>
  )
}