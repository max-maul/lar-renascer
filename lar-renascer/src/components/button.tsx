interface buttonProps {
    name: string;
    title: string;
}

export function Button({name, title}: buttonProps) {
    return (
        <div className="w-full" >
            <button name={name} className=" text-lg bg-custom-dark-pink w-full py-2 rounded-md text-white font-semibold hover:shadow-md transition-all duration-300">    
                {title}
            </button>
        </div>
    )
}