import { Input } from "../components/input"
import { Button } from "../components/button"
import { useForm } from "react-hook-form"
import { useState } from "react";
import { ajax } from "../ajax/ajax.ts";
export function Login() {
    const { register, handleSubmit } = useForm();
    const [errors, setErrors] = useState<any>({})


    const onSubmit = async (data: any) => {
        const {usuario, senha} = data;
        if (!usuario || usuario == "") {
            errors.usuario = "Usuário é obrigatório"
        }
        if (!senha || senha == "") {
            errors.senha = "Senha é obrigatório"
        }

        const response = await ajax("/auth/login", "post", data); 
        



    };


    return (
        <div className=" flex justify-center w-screen h-screen bg-custom-pink" >
            <div className="flex flex-col " >
                <div className="w-72 h-72 mb-12 mt-28" >
                    <img src="../public/images/renascer_logo.png" alt="" />
                </div>
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="gap-8 mt-12  flex flex-col w-full">
                    <Input register={register} name="usuario" placeholder="Usuário" title="Usuário" />
                    <Input register={register} name="senha" placeholder="Senha" title="Senha" />
                </div>
                <div className="mt-12 w-full">
                    <Button name="login" title="Entrar" />
                </div>
                </form>
            </div>
        </div>
    )
}