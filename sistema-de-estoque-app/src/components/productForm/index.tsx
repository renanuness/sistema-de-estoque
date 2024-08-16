import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"
import { M } from "vite/dist/node/types.d-aGj9QkWt";


const schema = yup.object({
    title: yup.string().required(),
    price: yup.number().min(0.01).required(),
    description: yup.string().required(),

})
.required();

export default function ProductForm(props: any) {
    let product: Product | any = props.product;

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<Product>({
        defaultValues: { ...product } 
    })

    const onSubmit: SubmitHandler<Product> = (data) => { props.submit(data) };


    useEffect(() => {
        reset(product);
    }, [product]);

    console.log(errors);
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("title", { required: "Preencha o título" })} />
                <p> {errors.title?.message}</p>
                <input type="text" {...register("description", { required: true })} />
                <p> {errors.title?.message}</p>
                <input type="text" {...register("price", { required: true })} />
                <p> {errors.title?.message}</p>
                <input type="text" {...register("brand", { required: true })} />
                <p> {errors.title?.message}</p>
                <input type="text" {...register("stock", { required: true })} />
                <p> {errors.title?.message}</p>
                <input type="submit" value={"Salvar"} />
            </form>
        </>
    )
}