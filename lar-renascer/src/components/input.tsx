interface inputProps {
    name: string;
    placeholder: string;
    title: string;
}

export function  Input({name, placeholder, title}: inputProps) {
    return (
        <div  >
            <label className="flex flex-col text-white font-semibold" htmlFor={name}>{title} 
                <input className=" w rounded-md outline-none border-none px-2 text-black py-2 text-md" type="text" placeholder={placeholder}  name={name} />
            </label>
        </div>
    )
}