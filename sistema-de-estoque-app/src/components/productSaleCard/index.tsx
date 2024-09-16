import { useState } from 'react';
import styles from './styles.module.css'

export default function ProductSaleCard(props){
    const product = props.product;
    const [amount, setAmount] = useState(0);

    function add(){
       
    }

    function changeAmount(value){
        if(product.stock < value){
            setAmount(product.stock);
            return;
        }

        setAmount(value);
    }

    return (
        <div className={styles.container}>
            { product ? <> 
                <p>{product.title}</p>
                <p>R${product.price}</p>
                <p>Quantidade disponível: {product.stock}</p>
                <input type='number' value={amount} onChange={(e)=>changeAmount(e.target.value)}/>
                <button onClick={()=>props.addProduct(amount)}>Adicionar</button>
                </> : ''
            }
        </div>
    )
}