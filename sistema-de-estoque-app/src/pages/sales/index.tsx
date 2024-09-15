import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";

import ProductSaleCard from "../../components/productSaleCard";

import { getAllProducts } from "../../services/service";

import styles from './styles.module.css';
import ListProductsSale from "../../components/listProductsSale";
import { useNavigate } from "react-router-dom";

interface SearchLabel {
    id: number,
    label: string
}
export default function Sales() {
    const navigate = useNavigate();

    const [products, setProducts] = useState<Product[]>([]);
    const [productsLabel, setLabels] = useState<SearchLabel[]>([]);

    const [value, setValue] = useState<SearchLabel | null>();
    const [inputValue, setInputValue] = useState('');

    const [selectedProduct, setSelectedProduct] = useState<Product>();

    const [productsSale, setProductsSale] = useState<Product[]>([]);

    function addProduct(amount: number) {
        if (selectedProduct == null || selectedProduct == undefined || amount == 0) return;
        if (productsSale.includes(selectedProduct)) {
            return;
        }
        selectedProduct.amount = amount;
        setProductsSale([...productsSale, selectedProduct]);
    }

    useEffect(() => {
        getAllProducts(1, 200).then(data => {
            setProducts(data.products);
        })
    }, []);

    useEffect(() => {
        let labels: SearchLabel[] = [];
        products?.forEach(product => {
            labels.push({
                label: product.title,
                id: product.id
            })
        });

        setLabels(labels);
    }, [products])

    useEffect(() => {
        let p = products.filter(p => p.id == value?.id);
        if (p != null) {
            setSelectedProduct(p[0]);
        }
    }, [value]);

    function finishSale(){
        navigate("/");
    }

    return (
        <div className={styles.container}>
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
            <ProductSaleCard addProduct={(amount: number) => addProduct(amount)} product={selectedProduct} />
            <ListProductsSale products={productsSale}/>
            <div>
                <button onClick={finishSale}>Concluir venda</button>
                <button onClick={()=>navigate("/")}>Voltar</button>
            </div>
        </div>
    )
}

/**
 * Adicionar no carrinho
 * Realizar a venda
 * Listar funcionários
 */