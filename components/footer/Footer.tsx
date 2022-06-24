import WidthLimiter from "../WidthLimiter";
import styles from './footer.module.css'

export default function Footer() {
  return (
    <section className="bg-[#F3CABD]">
      <WidthLimiter paddingAll={ true } customPadding={ false }>
        {/* extra padding */}
        <div className="px-8">
          {/* flex */}
          <div className="flex items-center justify-around">
            {/* left (words) */}
            <div className="w-[35%] grid grid-cols-2 space-x-5 text-sm uppercase font-Lato">
              {/* left */}
              <div className="flex flex-col space-y-3">
                <p>faq</p>
                <p>contact</p>
                <p>blog</p>
                <p>loyalty program</p>
                <p>sitemap</p>
              </div>
              {/* right */}
              <div className="flex flex-col space-y-3">
                <p>press</p>
                <p>terms</p>
                <p>privacy</p>
                <p>shipping & returns</p>
                <p>wholesale</p>
              </div>
            </div>
            
            {/* right (form) */}
            <div className="w-[35%] flex flex-col">
              <h2 className="font-Oswald font-medium">Be in the know.</h2>
              <p className="font-Lato text-[#DA736D]">Sign up to get exclusive offers, our newest Delights, and more!</p>
              <form>
                <input type="email" className={styles.input} />
                <button type="submit" className="uppercase">subscribe </button>
              </form>
            </div>
          </div>
        </div>
      </WidthLimiter>
    </section>
  )
}