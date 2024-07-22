import { useNavigate } from "react-router-dom";
import isLogged from "../../utils/auth";
import { useEffect } from "react";
import CreateProduct from "../products/create";

export default function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
            if (!isLogged()) {
                navigate("/login");
            }
    })

    return <>
        <p>Dashboard</p>
        <CreateProduct></CreateProduct>
    </>
}