import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CreateProduct from "../products/create";
import styles from "./styles.module.css";


export default function Dashboard() {
    const navigate = useNavigate();


    function redirect(dest){
        navigate(dest);
    }

    return (
        <div className={styles.dashboard}>
            <div onClick={()=>redirect("/stock")}>
                <h2>Estoque</h2>
                <p>Gerencie os produtos!</p>
            </div>
            <div onClick={()=>redirect("/employees")}>
                <h2>Funcionários</h2>
                <p>Gerencie os funcionários!</p>
            </div>
            <div onClick={()=>redirect("/reports")}> 
                <h2>Relatórios</h2>
                <p>Acesse relatórios sobre vendas!</p>
            </div>
            <div onClick={()=>redirect("/sales")}> 
                <h2>Venda</h2>
                <p>Realize uma venda!</p>
            </div>
        </div>
    );
}