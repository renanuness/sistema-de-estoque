import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";


export default function ProductForm(props: any) {
    let product: Product | any = props.product;


    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm<Product>({ defaultValues: { ...product } })

    const onSubmit: SubmitHandler<Product> = (data) => { props.submit(data) };


    useEffect(() => {
        reset(product);
    }, [product]
    );
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("title", { required: true })} />
                <p> {errors.title?.message}</p>
                <input type="text" {...register("description", { required: true })} />
                <input type="text" {...register("price", { required: true })} />
                <input type="text" {...register("brand", { required: true })} />
                <input type="text" {...register("stock", { required: true })} />
                <input type="submit" value={"Salvar"} />
            </form>
        </>
    )
}

<div>

</div>