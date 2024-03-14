import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



const Contact = () => {

    return (
        <div className="flex items-center flex-col">
            <h1 className="text-3xl font-bold">Contact</h1>
            <div className="flex flex-col p-4 rounded-xl gap-2 md:flex-row md:flex-wrap md:justify-center md:items-center md:p-2 md:border-none">
                <img className="w-[200px] md:w-[40%]" src="https://avatars.githubusercontent.com/u/116507047?v=4" alt="gh0stfrk_png" />
                <div className="flex flex-col gap-3">
                    <p className="font-extralight text-2xl"><span className="font-semibold">S</span>alman Sayyed</p>
                    <div className="border border-black p-3 rounded-xl">
                        <FaGithub size={20}/>
                        <a href="https://github.com/gh0stfrk" target="_blank">gh0stfrk</a>
                    </div>
                    <div className="border border-black p-3 rounded-xl">
                        <SiGmail size={20}/>
                        <p>salmansyyd12@gmail.com</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact;