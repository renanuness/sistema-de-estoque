import axios from "axios";
import { useEffect, useState } from "react";

export default function EditProduct(props) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get('https://dummyjson.com/products/1').then((response) => {
            console.log(response);
            setProduct(response.data);
        })
    })

    return (
        <>
            <form action="">
                <input type="text" value={product.title} />
                <input type="text" value={product.description}/>
                <input type="text" value={product.price}/>
                <input type="text" value={product.brand}/>
                <input type="text" value={product.stock} disabled/>
            </form>
        </>
    )
}