import { HeaderLegal } from "../Components/Sections/HeaderLegal";
import "./Legal.css";

export const Legal = () => {

    const datosLegales = [
        {
            title: "2. Uso del sitio web",
            content: "El acceso y navegación por este sitio implica la aceptación de este aviso legal. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios ofrecidos, y a no emplearlos para actividades ilegales o contrarias a la buena fe."
        },
        {
            title: "3. Propiedad intelectual",
            content: "Todos los contenidos de este sitio web (textos, imágenes, logotipos, diseños...) son propiedad de Nuevotech o se han utilizado con licencias que permiten su uso. Queda prohibida su reproducción, distribución o modificación sin autorización previa."
        },
        {
            title: "4. Protección de datos",
            content: "Nuevotech cumple con la normativa vigente en materia de protección de datos. Los datos personales que se recogen a través del formulario de contacto serán tratados conforme a la política de privacidad."
        },
        {
            title: "5. Enlaces a terceros",
            content: "este sitio web puede contener enlaces a otros sitios web. Nuevotech no se hace responsable del contenido o la disponibilidad de estos sitios, ni de los daños que puedan derivarse de su uso."
        },
        {
            title: "6. Modificaciones",
            content: "Nuevotech se reserva el derecho a modificar este aviso legal en cualquier momento. Las modificaciones serán publicadas en esta página y entrarán en vigor desde su publicación."
        }
    ];

    return (
        <div className="flex flex-col items-center">
            <HeaderLegal />
            <div className="informaciones flex flex-col gap-10 w-8/10">
                <div className="informacionLegal w-auto">
                    <h2 className="tituloSeccion text-3xl md:text-4xl lg:text-5xl font-semibold">1. Información general</h2>
                    <p className="pIconos text-lg md:text-xl lg:text-2xl">Este sitio web pertenece a Nuevotech, una empresa ficticia creada con fines educativos.</p>
                    <ul>
                        <li className="flex items-center text-lg md:text-xl lg:text-2xl"><i className="bx bx-location-plus"></i><span>Domicilio social</span>: Calle Ficticia, 123, 08000 Barcelona</li>
                        <li className="flex items-center text-lg md:text-xl lg:text-2xl"><i className="bx bx-envelope"></i><span>Correo de contacto</span>: info@nuevotech.com</li>
                        <li className="flex items-center text-lg md:text-xl lg:text-2xl"><i className="bx bx-globe"></i><span>Dominio web</span><a href="https://nuevotech-sigma.vercel.app" target="_blank">: nuevotech-sigma.vercel.app</a></li>
                    </ul>
                </div>
                {
                    datosLegales.map((dato) => {
                        return (
                            <div className="informacionLegal">
                                <h2 className="tituloSeccion text-3xl md:text-4xl lg:text-5xl font-semibold">{dato.title}</h2>
                                <p className="text-lg md:text-xl lg:text-2xl">{dato.content}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}