import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import styles from "./styles.module.css";
import MaterialButton from "../button";

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

    const title = props.type == 'add' ? "Adicionar Produto" : "Editar Produto";
    
    return (
        <>
            <h1>{title}</h1>
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
                <div className={styles.buttonContainer}>
                <input className={[styles.saveButton, styles.button].join(' ')} type="submit" value={"Salvar"} />
                {props.type == 'add' ? 
                    <button className={[styles.deleteButton, styles.button].join(' ')} onClick={(e)=>props.cancel(e)}>Cancelar</button> :
                    <button className={[styles.deleteButton, styles.button].join(' ')} onClick={(e)=>props.delete(e)}>Excluir</button> 
                }
                </div>
            </form>
        </>
    )
}