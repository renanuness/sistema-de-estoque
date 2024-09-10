import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { parse } from 'date-fns'; 

import styles from "./styles.module.css";
import MaterialButton from "../button";

interface IFormInput {
    name: string;
    position: string;
    salary: number;
    hireDate: string;
    email: string;
  }

const schema = yup
  .object().shape({
        name: yup.string().required("Preencha o nome").min(5, "Nome precisa ter pelo menos 5 caracteres"),
        position: yup.string().required("Preencha o cargo"),
        email: yup.string().email().required("Preencha o email"),
        salary: yup.number().typeError("O valor precisa ser numérico").required("Preencha o salário").min(1412, "Salŕio precisa ser maior que o salário mínimo"),
        hireDate: yup.date().typeError("O valor precisa ser uma data").required("Preencha a data de contratação")
  });
export default function EmployeeForm(props: any) {
    const [employee, setEmployee] = useState(props.employee);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<EmployeeValidation>({
        defaultValues: { ...employee },
        resolver: yupResolver(schema)
    })

    const onSubmit: SubmitHandler<Employee> = (data) => { props.submit(data) };


    useEffect(() => {
        reset(employee);
    }, [employee]);

    const title = props.type == 'add' ? "Adicionar Funcionário" : "Editar Funcionário";
    
    return (
        <>
            <h1>{title}</h1>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <TextField label="Nome" {...register("name")}/>
                <p> {errors.name?.message}</p>

                <TextField  label="Email" multiline {...register("email")}/>
                <p> {errors.email?.message}</p>

                <TextField label="Cargo"  {...register("position")} />
                <p> {errors.position?.message}</p>
                
                <TextField label="Salário"  {...register("salary")}/>
                <p> {errors.salary?.message}</p>
                
                <TextField label="Data Contratação"  {...register("hireDate")} />
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