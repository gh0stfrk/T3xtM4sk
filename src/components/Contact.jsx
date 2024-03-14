import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";



const Contact = () => {

    return (
        <div className="flex items-center flex-col">
            <div className="flex flex-col p-4 rounded-xl gap-2 md:flex-row md:flex-wrap md:justify-center md:items-center md:p-2 md:border-none">
                <img className="w-[200px] md:w-[40%]" src="https://avatars.githubusercontent.com/u/116507047?v=4" alt="gh0stfrk_png" />
                <div className="flex flex-col gap-3">
                    <p className="font-bold text-2xl">Salman Sayyed</p>
                    <div>
                        <FaGithub size={20}/>
                        <a href="https://github.com/gh0stfrk" target="_blank">gh0stfrk</a>
                    </div>
                    <div>
                        <SiGmail size={20}/>
                        <p>salmansyyd12@gmail.com</p>
                    </div>
                </div>
            </div>
            <div>
                <h1>Contact me if you like it</h1>
            </div>
        </div>
    )

}

export default Contact;