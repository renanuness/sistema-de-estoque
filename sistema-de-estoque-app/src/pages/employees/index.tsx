import { useEffect, useState } from "react";
import AddButton from "../../components/addButton"
import CloseButton from "../../components/closeButton"
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { formatDate } from '../../utils/date';

import { getEmployees } from "../../mock/employees";
export default function Employees() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        setEmployees(getEmployees());
    }, [])


    function addEmployee() {
        navigate("/employees/add")
    }

    function back() {
        navigate("/");

    }

    function editEmployee(id: number) {
        navigate("/employees/edit/", { state: { id: id } });
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.headContainer}>
                <CloseButton action={back} />
                <h1 className="text-center">Funcionários</h1>
                <AddButton action={addEmployee} />
            </div>
            <table >
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Cargo</th>
                        <th>Data de contratação</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr className={styles.productRow} key={employee.id} onClick={()=>editEmployee(employee.id)}>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.position}</td>
                            <td>{formatDate(employee.hireDate)}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>)
}
