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

    return (<>
        <Autocomplete
            disablePortal
            noOptionsText='Sem produtos disponíveis'
            options={productsLabel}
            sx={{ width: 500 }}
            renderInput={(params) => <TextField{...params} label="Produto" />}
        />
        <p>Sales</p>
    </>)
}