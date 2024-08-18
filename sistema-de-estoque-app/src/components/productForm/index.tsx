import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import styles from "./styles.module.css";

export default function ProductForm(props: any) {
    const [product, setProduct] = useState(props.product);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Product>({
        defaultValues: { ...product } 
    })

    const onSubmit: SubmitHandler<Product> = (data) => { props.submit(data) };


    useEffect(() => {
        reset(product);
    }, [product]);

    console.log(props.product);

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <TextField label="Título" {...register("title", { required: "Preencha o título" })}/>
                <p> {errors.title?.message}</p>

                <TextField  label="Descrição" multiline {...register("description", { required: "Preencha a descrição" })}/>
                <p> {errors.description?.message}</p>

                <TextField label="Valor"  {...register("price", { required: "Preencha o preço", min: 0.01 })} />
                <p> {errors.price?.message}</p>
                
                <TextField label="Marca"  {...register("brand", { required: "Preencha a marca" })}/>
                <p> {errors.brand?.message}</p>
                
                <TextField label="Quantidade"  {...register("stock", { required: true, min: 0 })} />
                <p> {errors.stock?.message}</p>
                
                <input type="submit" value={"Salvar"} />
            </form>
        </>
    )
}