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
    } = useForm<Employee>({
        defaultValues: { ...product } 
    })

    const onSubmit: SubmitHandler<Product> = (data) => { props.submit(data) };


    useEffect(() => {
        reset(product);
    }, [product]);

    const title = props.type == 'add' ? "Adicionar Funcionário" : "Editar Funcionário";
    
    return (
        <>
            <h1>{title}</h1>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <TextField label="Nome" {...register("name", { required: "Preencha o título" })}/>
                <p> {errors.name?.message}</p>

                <TextField  label="Email" multiline {...register("email", { required: "Preencha a descrição" })}/>
                <p> {errors.email?.message}</p>

                <TextField label="Cargo"  {...register("position", { required: "Preencha o preço", min: 0.01 })} />
                <p> {errors.position?.message}</p>
                
                <TextField label="Salário"  {...register("salary", { required: "Preencha a marca" })}/>
                <p> {errors.salary?.message}</p>
                
                <TextField label="Data Contratação"  {...register("hireDate", { required: true, min: 0 })} />
                <p> {errors.hireDate?.message}</p>
                <div className={styles.buttonContainer}>
                <input className={[styles.saveButton, styles.button].join(' ')} type="submit" value={"Salvar"} />
                {
                     props.type == 'add' ? 
                     <button className={[styles.deleteButton, styles.button].join(' ')} onClick={(e)=>props.cancel(e)}>Cancelar</button>:
                     <button className={[styles.deleteButton, styles.button].join(' ')} onClick={(e)=>props.delete(e)}>Excluir</button>
                }
                </div>
            </form>
        </>
    )
}