import axios from "axios";
import { useEffect, useState } from "react"
import styles from './styles.module.css';
import { useNavigate } from "react-router-dom";

export default function Stock() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        console.log("carregar os produtos");
        axios.get('https://dummyjson.com/products').then(function (response) {
            setProducts(response.data.products);
            console.log(response);
        });
    }, [])

    function editProduct(id){
        navigate(`/stock/${id}`);
    }
    return (<>
        <h1 className="text-center">Produtos</h1>
        <table >
            <thead>
                <td>Título</td>
                <td>Marca</td>
                <td>Quantidade</td>
                <td>Preço</td>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product.id} onClick={editProduct(product.id)}>
                        <td>{product.title}</td>
                        <td>{product.brand}</td>
                        <td>{product.stock}</td>
                        <td>{product.price}</td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </>)
}