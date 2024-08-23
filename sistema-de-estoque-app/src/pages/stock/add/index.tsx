import { useNavigate } from "react-router-dom";
import ProductForm from "../../../components/productForm";

export default function AddProduct(){
    const navigate = useNavigate();

    function addProduct(product: any){

        console.log(product);

        navigate("/stock")
    }

    function back(){
        navigate("/stock")
    }

    return (
        <div>
            <ProductForm submit={(p: any)=>addProduct(p)} cancel={back} type={"add"}></ProductForm>
        </div>
    );
}