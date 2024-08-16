import axios from "axios";
import { title } from "process";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { NavigateFunction, useLocation, useNavigate, useNavigation } from "react-router-dom";
import ProductForm from "../../../components/productForm";

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
    }

    return (
        <>
            {product ? <ProductForm product={product} submit={(p:any)=>save(p)}/> : <ProductForm></ProductForm>}
        </>
    )
}