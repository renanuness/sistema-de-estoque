import { useNavigate } from "react-router-dom";
import EmployeeForm from "../../../components/employeeForm";

export default function AddEmployee(){
    const navigate = useNavigate();

    function addEmployee(employee: any){

        console.log(employee);

        back();
    }

    function back(){
        navigate("/employees")
    }
    return (
        <div>
            <EmployeeForm submit={(e: any)=>addEmployee(e)} cancel={back} type={"add"}></EmployeeForm>
        </div>
    );
}