import axios from "axios";
import { useEffect, useState } from "react";

export default function EditProduct({route, navigation}) {
    const [product, setProduct] = useState({});

    const productId = route.params.id;
    useEffect(() => {
        axios.get('https://dummyjson.com/products/'+productId).then((response) => {
            console.log(response);
            setProduct(response.data);
        },[]).catch()
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