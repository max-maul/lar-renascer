import { Button } from "../components/button"
import { Input } from "../components/input"
import { useForm } from "react-hook-form"
import { ajax, apiResponse } from "../ajax/ajax.mts";
export function Acolhidas() {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data: any) => {
        console.log(data);
        const response: apiResponse = await ajax("/acolhidas/todas", "get");
        console.log(response);
    }

    return (
        <div className="pageHeight customPink px-6 flex flex-col items-center" >
            <form className="w-11/12 h-1/6 flex justify-between items-center " onSubmit={handleSubmit(onSubmit)} >
                <div className="w-2/6" >
                    <Input name="searchAcolhidas" placeholder="Pesquisar" title="Acolhidas" register={register} />
                </div>
                <div className="w-1/6" >
                    <Button name="acolhidasSubmit" title="Buscar" type="submit" />
                </div>
            </form>
            <div className=" flex w-11/12 h-full bg-white mb-4" >
            
            </div>
        </div>
    )
}