interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className }: ContainerProps ) => {
    return (
        <div className={`bloqueInfo w-full flex gap-5 lg:gap-0 justify-center items-center lg:flex-row ${className}`}>
            {children}
        </div>
    )
};