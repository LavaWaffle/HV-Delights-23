import { useEffect, useState } from "react";

type props = {
  setDoor: (boolean) => void
}

export default function Door({setDoor}: props) {
  const [leave, setLeave] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLeave(true);
    }, 2000);
    setTimeout(() => {
      setDoor(false);
    }, 2500)
  }, []);
  return (
    // full screen
    <section className="fixed top-0 left-0 w-full h-full z-50 flex">
      <div className={`w-1/2 bg-blue-500 ${leave ? "animate-slide-left-out" : ""}`}>
        
      </div>

      <div className={`w-1/2 bg-orange-500 ${leave ? "animate-slide-right-out" : ""}`}>
      
      </div>
    </section>
  )
}