import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import EmployeeForm from "../../../components/employeeForm";

import styles from "./styles.module.css";
import CloseButton from "../../../components/closeButton";

import { getEmployeeById } from "../../../mock/employees";

export default function EditEmployee(){
    const [employee, setEmployee] = useState<Employee | undefined>();
    const location = useLocation();
    const navigate = useNavigate();
    const id = location.state.id;

    if(id == null || id == undefined){

        navigate("/stock");
    }
    
    useEffect(()=>{
        let e = getEmployeeById(id);
        console.log(e);
        setEmployee(e);
    })

    function save(p: any){
        console.log(p);

        back();
    }

    function deleteEmployee(e : any){
        e.preventDefault();
        console.log(typeof(e));
        console.log(JSON.stringify(e));
        console.log("Deletando o funcionário com id: " + employee?.id);
        back();
    }

    function back(){
        navigate("/employees");
    }

    return (
        <div className={styles.formContainer}>
            <CloseButton action={back}></CloseButton>
            {employee ? <EmployeeForm employee={employee} submit={(p:any)=>save(p)}  delete={(e: any) => deleteEmployee(e)}/> : ""}
        </div>
    )
}