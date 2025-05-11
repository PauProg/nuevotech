import './HeaderLegal.css';

export const HeaderLegal = () => {
    return (
        <div className={`headerContacto bg-cover bg-right-top bg-fixed min-h-[55vh] min-w-screen flex flex-col items-center justify-end`}>
            <h1 className="h1Header text-4xl md:text-5xl lg:text-6xl text-center w-auto md:w-5xl font-semibold titulo">
                Aviso legal y política de privacidad
            </h1>
        </div>
    );
}