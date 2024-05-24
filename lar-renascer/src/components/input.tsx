interface inputProps {
    errors?: string;
    name: string;
    placeholder: string;
    title: string;
    customCss?: string;
    register: any;
    rules?: string;
}

export function  Input({name, customCss, rules, placeholder, title, register, errors}: inputProps) {
    return (
        <div className={`${customCss} w-full  `} >
            <label className=" text-white font-semibold " htmlFor={name}>{title} </label>
            <input  {...register(name, rules)} className=" w-full rounded-md outline-none border-none px-2 text-black py-2 text-md" type="text" placeholder={placeholder}  name={name} />
            <p className=" font-semibold" >{ errors }</p>
        </div>
    )
}