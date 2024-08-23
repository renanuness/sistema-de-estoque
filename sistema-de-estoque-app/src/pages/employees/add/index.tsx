import { useNavigate } from "react-router-dom";
import EmployeeForm from "../../../components/employeeForm";

export default function AddEmployee(){
    const navigate = useNavigate();

    function addEmployee(employee: any){

        console.log(employee);

        navigate("/employee")
    }

    return (
        <div>
            <EmployeeForm submit={(e: any)=>addEmployee(e)} type={"add"}></EmployeeForm>
        </div>
    );
}