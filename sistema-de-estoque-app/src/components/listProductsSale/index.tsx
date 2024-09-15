import { useEffect, useState } from "react";

import styles from './styles.module.css';

export default function ListProductsSale(props: any){
    const [products, setProducts] = useState(props.products);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(()=>{
        let p = 0;
        for(let i = 0; i < products.length; i++){
            p += products[i].price * products[i].amount; 
        }

        setTotalPrice(p);
    }, [products])

    return (
        <div>
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
                        <tr>
                            <td>{product.title}</td>
                            <td>{product.amount}</td>
                            <td>{product.price}</td>
                            <td>{product.price * product.amount}</td>
                        </tr>
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Preço total</td>
                        <td>{}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}