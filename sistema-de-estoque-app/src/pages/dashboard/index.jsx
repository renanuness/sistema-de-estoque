import { useNavigate } from "react-router-dom";
import isLogged from "../../utils/auth";
import { useEffect } from "react";
import CreateProduct from "../products/create";
import './styles.css';

export default function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
            if (!isLogged()) {
                navigate("/login");
            }
    })

    function redirect(dest){
        alert(dest);
    }

    return (
        <div className="dashboard">
            <div onClick={()=>redirect("estoque")}>
                <p>Estoque</p>
            </div>
            <div onClick={()=>redirect("funcionarios")}>
                <p>Funcionários</p>
            </div>
            <div onClick={()=>redirect("relatorios")}> 
                <p>Relatórios</p>
            </div>
            <div onClick={()=>redirect("vendas")}> 
                <p>Venda</p>
            </div>
        </div>
    );
}