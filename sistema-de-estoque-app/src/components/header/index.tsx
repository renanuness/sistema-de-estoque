
export default function Header(){

    return(
        <div className="w-[100%] bg-red-300">
            <nav>
                <ul className="flex flex-row text-3xl">
                    <li className="h-16 border-2 border-white">Início</li>
                    <li className="h-16 border-2 border-white">Estoque</li>
                    <li className="h-16 border-2 border-white">Funcionários</li>
                    <li className="h-16 border-2 border-white">Relatórios</li>
                    <li className="h-16 border-2 border-white">Vendas</li>
                </ul>
            </nav>
        </div>
    )

}