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
                <input type="text" {...register("description", { required: "Preencha a descrição" })} />
                <p> {errors.description?.message}</p>
                <input type="text" {...register("price", { required: "Preencha o preço", min: 0.01 })} />
                <p> {errors.price?.message}</p>
                <input type="text" {...register("brand", { required: "Preencha a marca" })} />
                <p> {errors.brand?.message}</p>
                <input type="text" {...register("stock", { required: true, min: 0 })} />
                <p> {errors.stock?.message}</p>
                <input type="submit" value={"Salvar"} />
            </form>
        </>
    )
}