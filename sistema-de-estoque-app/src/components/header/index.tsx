import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext';
import styles from './styles.module.css';

export default function Header(){
    const {logout} = useAuth();
    const navigate = useNavigate();

    return(
        <div className={styles.container}>
            <nav>
                <ul>
                    <li onClick={()=>navigate("/dashboard")}>Home</li>
                    <li onClick={()=>navigate("/stock")}>Produtos</li>
                    <li onClick={()=>navigate("/employees")}>Funcionários</li>
                    <li onClick={()=>navigate("/sales")}>Vendas</li>
                    <li onClick={()=>navigate("/reports")}>Relatórios</li>
                    <li onClick={()=>logout()}>Logout</li>
                </ul>
            </nav>
        </div>
    )
}