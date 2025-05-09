import './HeaderContacto.css';

export const HeaderContacto = () => {
    return (
        <div className={`headerContacto bg-cover bg-left-top bg-fixed min-h-[55vh] min-w-screen flex flex-col items-center justify-end`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center w-5xl font-semibold titulo">
                Contacto
            </h1>
        </div>
    );
}