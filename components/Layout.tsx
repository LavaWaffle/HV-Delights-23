// import Footer from "./Footer/Footer"
import Navbar from "./navbar/Navbar"

type props = {
  children: JSX.Element
}

export default function Layout({ children }: props) {
  return (
    <>
      <Navbar />
      <main>
        { children }
      </main>
      {/* <Footer /> */}
    </>
  )
}