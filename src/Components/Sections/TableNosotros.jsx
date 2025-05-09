export const TableNosotros = () => {
    return (
        <table className="w-full md:w-2/5 h-[55vh] table-auto border-separate border-spacing-0 border-[#373A5E] border-2 bg-[#161934] rounded-xl overflow-hidden">
            <tbody>
                <tr>
                    <td className="w-1/2 font-semibold text-2xl md:text-3xl lg:text-4xl h-36 text-center align-middle border-b border-r border-[#373A5E]">
                        <span className="inline-flex items-center justify-center gap-3">
                            <i className='bx bxl-google text-3xl md:text-4xl lg:text-5xl'></i>
                            Google
                        </span>
                    </td>
                    <td className="w-1/2 font-semibold text-2xl md:text-3xl lg:text-4xl h-36 text-center align-middle border-b border-[#373A5E]">
                        <span className="inline-flex items-center justify-center gap-3">
                            <i className='bx bxl-meta text-3xl md:text-4xl lg:text-5xl'></i>
                            Meta
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className="w-1/2 font-semibold text-2xl md:text-3xl lg:text-4xl h-36 text-center align-middle border-b border-r border-[#373A5E]">
                        <span className="inline-flex items-center justify-center gap-3">
                            <i className='bx bxl-github text-3xl md:text-4xl lg:text-5xl'></i>
                            GitHub
                        </span>
                    </td>
                    <td className="w-1/2 font-semibold text-2xl md:text-3xl lg:text-4xl h-36 text-center align-middle border-b border-[#373A5E]">
                        <span className="inline-flex items-center justify-center gap-3">
                            <i className='bx bxl-linkedin text-3xl md:text-4xl lg:text-5xl'></i>
                            LinkedIn
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className="w-1/2 font-semibold text-2xl md:text-3xl lg:text-4xl h-36 text-center align-middle border-r border-[#373A5E]">
                        <span className="inline-flex items-center justify-center gap-3">
                            <i className='bx bxl-airbnb text-3xl md:text-4xl lg:text-5xl'></i>
                            Airbnb
                        </span>
                    </td>
                    <td className="w-1/2 font-semibold text-2xl md:text-3xl lg:text-4xl h-36 text-center align-middle">
                        <span className="inline-flex items-center justify-center gap-3">
                            <i className='bx bxl-apple text-3xl md:text-4xl lg:text-5xl'></i>
                            Apple
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}