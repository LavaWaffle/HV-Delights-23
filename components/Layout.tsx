import { useHotkeys  } from "@mantine/hooks"
import { useState } from "react"
import Footer from "./footer/Footer"
import Navbar from "./navbar/Navbar"
import PopUp15 from "./PopUp15"
import PopUpTY from "./PopUpTY"

type props = {
  children: JSX.Element
}

export default function Layout({ children }: props) {
  const [popUp15State,setPopUp15State] = useState(false)
  const [popUpTY, setPopUpTY] = useState(false);

  function handlePopUpState() {
    setPopUp15State(!popUp15State)
  }

  useHotkeys([
    ['ArrowDown', () => handlePopUpState()],
    ['ArrowRight', () => setPopUpTY(!popUpTY)]
  ]);
  return (
    <div className="flex flex-col min-h-screen bg-[#FDACAC]">
      <div className="z-[999]">
        {popUp15State && <PopUp15 closePopUp={handlePopUpState} />}
        {popUpTY && <PopUpTY closePopUp={() => setPopUpTY(!popUpTY)} />}
      </div>
      <div className="grow-0 z-50">
        <Navbar />
      </div>
      <main className="grow z-5 overflow-x-hidden">
        { children }
      </main>
      <div className="grow-0 z-0">
        <Footer />
      </div>
    </div>
  )
}