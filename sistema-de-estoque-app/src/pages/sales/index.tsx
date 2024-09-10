import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/service";

interface SearchLabel{
    id: number,
    label: string
}
export default function Sales() {
    const [products, setProducts] = useState<Product[]>([]);
    const [productsLabel, setLabels] = useState<SearchLabel[]>([]);

    const [value, setValue] = useState<SearchLabel | null>();
    const [inputValue, setInputValue] = useState('');

    const [selectedProduct, setSelectedProduct] = useState<Product>();

    useEffect(() => {
        getAllProducts(1, 200).then(data => {
            setProducts(data.products);
        })
    },[]);

    useEffect(()=>{
        let labels: SearchLabel[] = [];
        products?.forEach(product => {
            labels.push({
                label:product.title, 
                id:product.id
            })
        });

        setLabels(labels);
    },[products])

    useEffect(()=>{
        let p = products.filter(p => p.id == value?.id);
        if(p != null){
            setSelectedProduct(p[0]);
        }
    },[value]);

    function productInfo(){
        return selectedProduct ? 
        (
            <>
                <h1>{selectedProduct.title}</h1>
                <h1>{selectedProduct.price}</h1>
                <h1>{selectedProduct.stock}</h1>
                <h1>{selectedProduct.title}</h1>
            </>
        ):'';
    }
    return (<>
        <Autocomplete
            disablePortal
            noOptionsText='Sem produtos disponíveis'
            options={productsLabel}
            sx={{ width: 500 }}
            value={value}
            onChange={(_: any, newValue: SearchLabel | null) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            renderInput={(params) => <TextField{...params} label="Produto" />}
        />
        { productInfo()}
    </>)
}