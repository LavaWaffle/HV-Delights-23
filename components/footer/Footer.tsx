import WidthLimiter from "../WidthLimiter";
import styles from './footer.module.css'
import Image from 'next/image';
import Link from "next/link";


export default function Footer() {
	return (
		<section className="bg-[#F3CABD] border-t-[20px] border-[#F5C4B9] relative">
			<WidthLimiter paddingAll={true} customPadding={false}>
				{/* flex */}
				<div className="flex-col-reverse flex sm:flex-row item-center justify-around sm:px-0 sm:mt-0 sm:mb-6 md:mb-20 z-30">
					{/* left (words) */}
					<div className="flex flex-col space-y-16 z-30"> 
						<div className="flex justify-center sm:justify-start mt-16 sm:mt-0 w-[100%] sm:w-[20%] md:w-[25%] lg:[35%] space-x-10 sm:space-x-20 tracking-[.07em] uppercase whitespace-nowrap text-[10px] phone:text-[14px] sm:text-xs md:text-sm ">
							<div className="flex flex-row space-x-5 phone:space-x-22 sm:space-x-5 md:space-x-7 lg:space-x-16 desk:space-x-32">
								{/* left */}
								<div className="flex flex-col space-y-10 sm:space-y-8 lg:space-y-8">	
									<Link href="#"><a>faq</a></Link>
									<Link href="#"><a>contact</a></Link>
									<Link href="#"><a>blog</a></Link>
									<Link href="#"><a>loyalty program</a></Link>
									<Link href="#"><a>sitemap</a></Link>
								</div>
								{/* right */}
								<div className="flex flex-col space-y-10 sm:space-y-8 lg:space-y-8">
									<Link href="#"><a>press</a></Link>
									<Link href="#"><a>terms</a></Link>
									<Link href="#"><a>privacy</a></Link>
									<Link href="#"><a>shipping & returns</a></Link>
									<Link href="#"><a>wholesale</a></Link>
								</div>
							</div>
						</div>
						{/* SVGS */}
						<div className="relative">
							<div className="flex flex-col space-y-4 sm:absolute sm:left-[-10px]">
								<div className="flex flex-row space-x-10">
									<div className="w-[3.5rem] sm:w-[3rem] lg:w-[4.5rem]">
										<Image
											src="/index/Footer/foodIconsSVG/GLUTENFREE.svg"
											alt="our facebook account"
											height={10}
											width={10}
											layout="responsive"
										/>
									</div>
									<div className="w-[3.5rem] sm:w-[3rem] lg:w-[4.5rem]">
										<Image
											src="/index/Footer/foodIconsSVG/U.svg"
											alt="our facebook account"
											height={10}
											width={10}
											layout="responsive"
										/>
									</div>
									<div className="w-[3.5rem] sm:w-[3rem] lg:w-[4.5rem]">
										<Image
											src="/index/Footer/foodIconsSVG/NONGMO.svg"
											alt="our facebook account"
											height={10}
											width={10}
											layout="responsive"
										/>
									</div>
									<div className="w-[3.5rem] sm:w-[3rem] lg:w-[4.5rem]">
										<Image
											src="/index/Footer/foodIconsSVG/Vegan.svg"
											alt="our facebook account"
											height={10}
											width={10}
											layout="responsive"
										/>
									</div>
								</div>
								<p className="text-[#847B7B] font-Lato font-normal tracking-[.07em]">
									Copyright © 2023 HVDelights
								</p>
							</div>
						</div>
					</div>
					{/* right (form) */}
					<div className="w-[100%] sm:w-[40%] md:w-[42%] lg:w-[40%] desk:w-[30%] flex flex-col h-full justify-center gap-12 ml-3 z-30">
						<h2 className="font-Oswald font-medium text-5xl">Be in the know.</h2>
						<p className="font-Lato font-black tracking-[.07em] text-xl sm:text-lg md:text-xl lg:text-lg mr-4  text-[#DA736D]">Sign up to get exclusive offers, our newest Delights, and more!</p>
						<form className="">
							<div className="border-b-8 pb-4 px-3 border-black flex justify-between">
								<input type="email" placeholder="Email Address" className={`${styles.input} text-[20px] sm:text-[11.5px] md:text-[15px] lg:text-[18px]`} />
								<button type="submit" className={`${styles.subscribe}  uppercase pr-[4px] font-extrabold tracking-[.07em] text-[20px] sm:text-[12.5px] md:text-[15px] lg:text-[18px]`}>subscribe</button>
							</div>
						</form>
						{/* SVGS */}
						<div className="flex flex-row space-x-16 -mt-6 pl-4">
							<Link href="#"><a className="w-[2.75rem]">
								<Image
									src="/index/Footer/socialSVGS/face.svg"
									alt="our facebook account"
									height={10}
									width={10}
									layout="responsive"
								/>
							</a></Link>
							<Link href="#"><a className="w-[2.75rem]">
								<Image 
									src="/index/Footer/socialSVGS/youtube.svg"
									alt="our youtube channel"
									height={10}
									width={10}
									layout="responsive"
								/>
							</a></Link> 
							<Link href="#"><a className="w-[3rem]">
								<Image
									src="/index/Footer/socialSVGS/twitter.svg"
									alt="our twitter account"
									height={10}
									width={10}
									layout="responsive"
								/>
							</a></Link>
						</div>
					</div>

				</div>
			</WidthLimiter>

			{/* absolute bentos */}
			{/* rice bento wrapper */}
			<div className="hidden lg:inline-flex z-0">
				<div className="absolute bottom-[15%] desk:bottom-[10%]  left-0 overflow-hidden z-0">
					{/* rice bento */}
					<div className="lg:w-[9rem] desk:w-[10rem] opacity-100">
						<Image
							src="/index/Footer/riceBento.png"
							width={10}
							height={16}
							layout="responsive"
						/>
					</div>
				</div>
				{/* pea bento wrapper */}
				<div className="absolute top-[-8.2rem] right-0">
					{/* pea bento */}
					<div className="w-[16rem] opacity-100 overflow-hidden">
						<Image
							src="/index/Footer/peaBento.png"
							width={10}
							height={19}
							layout="responsive"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}