import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import WidthLimiter from "./WidthLimiter";

export default function Navbar() {
  const [hamSubMenuHidden, setHamSubMenuHidden] = useState("hidden")
  
  const handleHam = () => {
    console.log("Hamburger Clicked");
    setHamSubMenuHidden(hamSubMenuHidden === "hidden" ? "" : "hidden");
  }

  const handleCart = () => {
    console.log("Cart Clicked");
  }

  const handleAccount = () => {
    console.log("Account Clicked");
  }
  return (
    <>
      <nav className="bg-[#FD7676] text-[#F4D9D9]">
        <WidthLimiter paddingAll={ false } customPadding={ false }>
          {/* flex */}
          <div className="flex items-center justify-between">
            {/* hamburger wrapper */}
            <div className="inline-flex gap-4">
              {/* hamburger */}
              <div className="nav-item-container group">
                <button className="nav-item" onClick={handleHam}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              {/* invisible hamburger to center the logo */}
              <div className="nav-item-container">
                <button className="nav-item hover:cursor-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="opacity-0 h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            {/* logo */}
            <div className="nav-item-container">
              <Link href="/"><a>
                <Logo />
              </a></Link>
            </div>
            {/* account & cart */}
            <div className="inline-flex gap-4">
              {/* account */}
              <div className="nav-item-container">
                <button className="nav-item" onClick={handleAccount}>
                  <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" strokeWidth="2" viewBox="0 0 1000 1000" enableBackground="new 0 0 1000 1000">
                    <g><path d="M500,10C231.5,10,10,231.5,10,500s221.5,490,490,490s490-221.5,490-490S768.5,10,500,10z M795.3,835.6c0-134.2-100.7-248.4-221.5-281.9c73.8-26.8,120.8-100.7,120.8-181.2c0-107.4-87.3-194.7-194.7-194.7s-194.7,87.3-194.7,194.7c0,80.5,53.7,154.4,120.8,181.2c-127.5,33.6-221.5,147.7-221.5,281.9C110.7,755.1,50.3,634.2,50.3,500C50.3,251.6,251.6,50.3,500,50.3c248.4,0,449.7,201.4,449.7,449.7C949.7,634.2,889.3,755.1,795.3,835.6z"/></g>
                  </svg>
                </button>
              </div>
              {/* cart */}
              <div className="nav-item-container">
                <button className="nav-item" onClick={handleCart}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </WidthLimiter>
        
        <div className={`${hamSubMenuHidden} bg-[#FFA8A8]`}>
          <WidthLimiter paddingAll={ false } customPadding={ true }>
            {/* padding */}
            <div className="px-16 py-2 text-[1.35rem]">
              {/* delights container */}
              <div className="group">
                {/* delights button */}
                <button className="flex items-center gap-1">
                  {/* delights text */}
                  <span>Delights</span>
                  {/* arrow */}
                  <svg className="group-focus-within:-rotate-180 transition-transform h-6 w-6" xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {/* delights sub menu */}
                <div className="hidden group-focus-within:inline-flex flex-col ml-6 text-xl space-y-1">
                  <Link href="#"><a>
                    Salads  
                  </a></Link>
                  <Link href="#"><a>
                    Sandwiches  
                  </a></Link>
                  <Link href="#"><a>
                    Soups  
                  </a></Link>
                  <Link href="#"><a>
                    Snacks  
                  </a></Link>
                  <Link href="#"><a>
                    Drinks  
                  </a></Link>
                </div>
              </div>

              {/* about link */}
              <div>
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