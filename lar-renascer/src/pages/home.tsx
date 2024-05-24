import { Button } from "../components/button"
import { useNavigate } from "react-router-dom"  
export function Home() {
    const navigate = useNavigate();

    const handleNavigate = (location:string) => {
        navigate(location);
    }
    return (
        <div className=" flex items-center justify-center pageHeight customPink" >
            <div className="flex w-2/4 h-1/4 mb-12 items-center justify-between" >
                <div className="flex flex-col gap-3 cursor-pointer w-2/6 h-full transition-all duration-300 hover:scale-105  " onClick={() => handleNavigate("/acolhidas")}  >
                    <img src="../public/images/acolhidas.jpg" alt="" className="rounded-md w-full h-full object-cover " />
                    <Button name="acolhidas" title="Acolhidas" />
                </div>
                <div className="flex flex-col gap-3 cursor-pointer w-2/6 h-full transition-all duration-300 hover:scale-105 "  onClick={() => handleNavigate("/benfeitores")}  >
                    <img src="../public/images/benfeitores.jpg" alt="" className="rounded-md w-full h-full object-cover " />
                    <Button name="benfeitores" title="Benfeitores" />
                </div>
            </div>
        </div>
    )
}