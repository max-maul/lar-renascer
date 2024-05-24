import { Button } from "./button"
import { useNavigate } from "react-router-dom"

interface HeaderProps {
    buttonType?: string;
    title: string;
}

export function Header({buttonType, title}: HeaderProps) {
    const navigate = useNavigate();

    const logout = () => {
        return;
    }

    const voltar = () => {
        return;
    }

    return (
        <div className="w-full headerHeight customBrown flex items-center justify-between px-4 box-border w- ">
            <div className="customWidth cursor-pointer" >
                <img src="../public/images/renascer_logo.png" alt=""  />
            </div>
            <p className="font-semibold text-white text-4xl" >{title}</p>
            <Button name="botaoHeader" title={ buttonType == "sair" ? "Sair" : "Voltar" } size=" w-24 " customCss="text-xl" onClick={ buttonType == "sair" ? () => logout() : () => voltar() } />
        </div>
    )
}