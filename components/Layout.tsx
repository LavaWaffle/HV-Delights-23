import Footer from "./footer/Footer"
import Navbar from "./navbar/Navbar"

type props = {
  children: JSX.Element
}

export default function Layout({ children }: props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grow-0">
        <Navbar />
      </div>
      <main className="grow">
        { children }
      </main>
      <div className="grow-0">
        <Footer />
      </div>
    </div>
  )
}