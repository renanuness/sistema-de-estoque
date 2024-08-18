import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProductForm from "../../../components/productForm";
import { Button } from "@mui/material";

import styles from "./styles.module.css";
import CloseButton from "../../../components/closeButton";

export default function EditProduct() {
    const [product, setProduct] = useState<Product | undefined>();
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.id;

    if(id == null || id == undefined){

        navigate("/stock");
    }
    useEffect(() => {
        axios.get('https://dummyjson.com/products/' + location.state.id).then((response: any) => {
            console.log(response);
            setProduct(response.data);
        });
    }, [])

    function save(p: any){
        console.log(p);

        back();
    }

    function back(){
        navigate("/stock")
    }
    return (
        <div className={styles.formContainer}>
            <CloseButton action={back}></CloseButton>
            <h1>Editar produto</h1>
            {product ? <ProductForm product={product} submit={(p:any)=>save(p)}/> : ""}
        </div>
    )
}