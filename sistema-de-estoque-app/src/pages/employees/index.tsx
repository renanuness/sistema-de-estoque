import { useEffect, useState } from "react";
import AddButton from "../../components/addButton"
import CloseButton from "../../components/closeButton"
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { formatDate } from '../../utils/date';

export default function Employees() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        setEmployees(funcionarios);
    }, [])


    function addEmployee() {
        navigate("/employees/add")
    }

    function back() {
        navigate("/");

    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.headContainer}>
                <CloseButton action={back} />
                <h1 className="text-center">Produtos</h1>
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
                        <tr className={styles.productRow} key={employee.id}>
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



const funcionarios = [
    {
        "id": 1,
        "name": "Ana Silva",
        "age": 28,
        "position": "Caixa",
        "salary": 2500.00,
        "hireDate": "2021-05-10",
        "email": "ana.silva@loja.com"
    },
    {
        "id": 2,
        "name": "Carlos Pereira",
        "age": 35,
        "position": "Gerente de Loja",
        "salary": 5500.00,
        "hireDate": "2019-08-15",
        "email": "carlos.pereira@loja.com"
    },
    {
        "id": 3,
        "name": "Mariana Costa",
        "age": 26,
        "position": "Assistente de Vendas",
        "salary": 2200.00,
        "hireDate": "2022-01-20",
        "email": "mariana.costa@loja.com"
    },
    {
        "id": 4,
        "name": "Pedro Santos",
        "age": 40,
        "position": "Supervisor de Estoque",
        "salary": 4000.00,
        "hireDate": "2018-03-05",
        "email": "pedro.santos@loja.com"
    },
    {
        "id": 5,
        "name": "Luiza Almeida",
        "age": 22,
        "position": "Auxiliar de Estoque",
        "salary": 1800.00,
        "hireDate": "2023-07-01",
        "email": "luiza.almeida@loja.com"
    },
    {
        "id": 6,
        "name": "Ricardo Moreira",
        "age": 31,
        "position": "Consultor de Vendas",
        "salary": 2700.00,
        "hireDate": "2020-09-18",
        "email": "ricardo.moreira@loja.com"
    },
    {
        "id": 7,
        "name": "Fernanda Oliveira",
        "age": 29,
        "position": "Atendente de Balcão",
        "salary": 2300.00,
        "hireDate": "2022-11-12",
        "email": "fernanda.oliveira@loja.com"
    },
    {
        "id": 8,
        "name": "Thiago Souza",
        "age": 45,
        "position": "Gerente de Estoque",
        "salary": 4800.00,
        "hireDate": "2016-02-28",
        "email": "thiago.souza@loja.com"
    },
    {
        "id": 9,
        "name": "Paula Ribeiro",
        "age": 24,
        "position": "Auxiliar Administrativo",
        "salary": 2000.00,
        "hireDate": "2023-03-22",
        "email": "paula.ribeiro@loja.com"
    },
    {
        "id": 10,
        "name": "Felipe Gomes",
        "age": 38,
        "position": "Coordenador de Vendas",
        "salary": 3600.00,
        "hireDate": "2017-12-10",
        "email": "felipe.gomes@loja.com"
    }
]
