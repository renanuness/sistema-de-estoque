import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EmployeeForm from "../../../components/employeeForm";

import styles from "./styles.module.css";
import CloseButton from "../../../components/closeButton";

export default function EditEmployee(){
    const [employee, setEmployee] = useState<Employee | undefined>();
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.id;

    if(id == null || id == undefined){

        navigate("/stock");
    }

    function save(p: any){
        console.log(p);

        back();
    }

    function deleteEmployee(e : any){
        e.preventDefault();
        console.log(typeof(e));
        console.log(JSON.stringify(e));
        console.log("Deletando o produto com id: " + employee?.id);
        back();
    }

    function back(){
        navigate("/employees");
    }

    return (
        <div className={styles.formContainer}>
            <CloseButton action={back}></CloseButton>
            <h1>Editar produto</h1>
            {product ? <EmployeeForm product={product} submit={(p:any)=>save(p)}  delete={(e: any) => deleteEmployee(e)}/> : ""}
        </div>
    )
}