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
        navigate(dest);
    }

    return (
        <div className="dashboard">
            <div onClick={()=>redirect("stock")}>
                <p>Estoque</p>
            </div>
            <div onClick={()=>redirect("employees")}>
                <p>Funcionários</p>
            </div>
            <div onClick={()=>redirect("reports")}> 
                <p>Relatórios</p>
            </div>
            <div onClick={()=>redirect("sales")}> 
                <p>Venda</p>
            </div>
        </div>
    );
}