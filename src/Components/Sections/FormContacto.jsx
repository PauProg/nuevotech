import emailjs from "emailjs-com";
import { useState } from "react";

export const FormContacto = () => {
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_SERVICE_ID, 
            import.meta.env.VITE_TEMPLATE_ID, 
            e.target, 
            import.meta.env.VITE_PUBLIC_KEY
        ).then((result) => {
            alert("Mensaje enviado con éxito!");
            setFormData({
                name: "",
                surname: "",
                email: "",
                phone: "",
                message: ""
            });
        }).catch(() => {
            alert("Error al enviar el mensaje, por favor intentalo de nuevo.");
        })
    };

    return (
        <form className="w-full formulario bg-[#171733] rounded-2xl border-[#2A2866] border-2 flex flex-col items-center justify-center gap-5" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4 md:gap-0">
                <label className="w-full md:w-[45%] flex flex-col items-start justify-center text-[#AAAAA6] gap-1">
                    Nombre
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        value={formData.name}
                        className="input w-full focus:outline-none bg-[#1C1C3D] text-[#E5F6FF] rounded-md border-[#353466] border-1" 
                        placeholder="Nombre..."
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                </label>
                <label className="w-full md:w-[45%] flex flex-col items-start justify-center text-[#AAAAA6] gap-1">
                    Apellido
                    <input 
                        type="text" 
                        id="surname" 
                        name="surname" 
                        required 
                        value={formData.surname}
                        className="input w-full focus:outline-none bg-[#1C1C3D] text-[#E5F6FF] rounded-md border-[#353466] border-1" 
                        placeholder="Apellido..."
                        onChange={(e) => setFormData({...formData, surname: e.target.value})}
                    />
                </label>
            </div>
            <label className="w-full flex flex-col items-start justify-center text-[#AAAAA6] gap-1">
                Correo electrónico
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    className="input w-full focus:outline-none bg-[#1C1C3D] text-[#E5F6FF] rounded-md border-[#353466] border-1" 
                    placeholder="tu@compañia.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
            </label>
            <label className="w-full flex flex-col items-start justify-center text-[#AAAAA6] gap-1">
                Número de teléfono
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    className="input w-full focus:outline-none bg-[#1C1C3D] text-[#E5F6FF] rounded-md border-[#353466] border-1" 
                    placeholder="+34 123 45 67 89"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
            </label>
            <label className="w-full flex flex-col items-start justify-center text-[#AAAAA6] gap-1">
                Mensaje
                <textarea 
                    id="message" 
                    name="message" 
                    required
                    rows={5}
                    value={formData.message}
                    style={{ resize: "none" }}
                    className="input w-full focus:outline-none bg-[#1C1C3D] text-[#E5F6FF] rounded-md border-[#353466] border-1" 
                    placeholder="Dejanos tu mensaje..."
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
            </label>
            <button type="submit" className="botonContactoContacto text-[#e5f6ff] bg-[#8D4ACD] w-full rounded-lg font-semibold hover:shadow-[0_0_10px_5px] hover:shadow-purple-800 transition-all duration-200">Envíanos un mensaje</button>
        </form>
    );
}