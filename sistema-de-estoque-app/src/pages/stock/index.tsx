import axios from "axios";
import { useEffect, useState } from "react"
import styles from './styles.module.css';
import { useNavigate } from "react-router-dom";
import CloseButton from "../../components/closeButton";
import AddButton from "../../components/addButton";
import { getAllProducts } from "../../services/service";


export default function Stock() {
    const [products, setProducts] = useState<Product[]>([]);
    const [curentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    useEffect(() => {
        getAllProducts(1, 30).then(data=>{
            console.log(data);
            setProducts(data.products)
        });
    }, [])

    function editProduct(id: number) {
        navigate("/stock/edit", { state: { id: id } })
    }

    function addProduct() {
        navigate("/stock/add");
    }

    function back() {
        navigate("/");
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.headContainer}>
                <CloseButton action={back} />
                <h1 className="text-center">Produtos</h1>
                <AddButton action={addProduct} />
            </div>


            <table >
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Marca</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr className={styles.productRow} key={product.id} onClick={() => {
                            editProduct(product.id);

                        }}>
                            <td>{product.title}</td>
                            <td>{product.brand}</td>
                            <td>{product.stock}</td>
                            <td>{product.price}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>)
}