import { useEffect, useState } from "react";

import styles from './styles.module.css';
import { useNavigate } from "react-router-dom";

export default function ListProductsSale(props: any){
    const [products, setProducts] = useState(props.products);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
        setProducts(props.products);
        let p = 0;
        for(let i = 0; i < props.products.length; i++){
            p += props.products[i].price * props.products[i].amount; 
        }

        console.log(JSON.stringify(products));
        setTotalPrice(p);
    }, [props])

    return (
        <div className={styles.container}>
            <table>
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Preço unitário</th>
                        <th>Preço total</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product: any) =>{
                      return  <tr>
                            <td>{product.title}</td>
                            <td>{product.amount}</td>
                            <td>{product.price}</td>
                            <td>{product.price * product.amount}</td>
                        </tr>
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={3}>Preço total</td>
                        <td>{totalPrice}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}