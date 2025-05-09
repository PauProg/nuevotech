import "./Contact.css";
import Icon from "/favicon.webp";
import ContactImg from "../assets/contact.webp";
import { HeaderContacto } from "../Components/Sections/HeaderContacto";
import { FormContacto } from "../Components/Sections/FormContacto";

export const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen">
            <HeaderContacto />
            <div className="contacto w-9/10 lg:w-[60%] min-h-[95vh] flex justify-between items-start">
                <div className="w-[49%] hidden lg:block">
                    <img src={ContactImg} alt="A person holding a phone" className="w-full rounded-2xl object-cover h-[930px]" />
                </div>
                <div className="w-full lg:w-[49%] h-full flex flex-col items-center justify-center gap-5 md:gap-10">
                    <a href="https://wa.me/34653853861" className="flex flex-col items-center justify-center bg-[#171733] rounded-2xl h-60 w-full border-[#8D4ACD] border-3 hover:bg-[#3A2661] transition duration-300">
                        <img src={Icon} alt="Nuevotech icon" className="w-20 h-20" />
                        <p className="text-[#aaaac1]">Chat y soporte</p>
                        <h3 className="text-[#E5F6FF] text-4xl font-semibold">+34 653 85 38 61</h3>
                    </a>
                    <FormContacto />
                </div>
            </div>
        </div>
    );
}