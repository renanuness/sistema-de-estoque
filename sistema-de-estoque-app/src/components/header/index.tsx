import styles from './styles.module.css';

export default function Header(){
    
    return(
        <div className={styles.container}>
            <nav>
                <ul>
                    <li>Produtos</li>
                    <li>Funcionários</li>
                    <li>Vendas</li>
                    <li>Relatórios</li>
                    <li>Logout</li>
                </ul>
            </nav>
        </div>
    )
}