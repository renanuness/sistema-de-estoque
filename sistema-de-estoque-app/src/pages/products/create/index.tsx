import styles from "./styles.module.css";

import { MaterialInput } from "../../../components/input";
import MaterialButton from "../../../components/button";

import { useState } from "react";

export default function CreateProduct(){
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");
    
    function saveProduct(){
        let product = { name: name, const: cost};

        console.log("Salvar: " + product);
        //TODO: Salvar
    }
    return(
        <div className={styles.container}>
            <form>
                <MaterialInput onChange={(e)=>setName(e)} type="text" label="Nome"></MaterialInput>
                <MaterialInput onChange={(e)=>setCost(e)} type="money" label="Preço de custo"></MaterialInput>
                <MaterialButton onClick={saveProduct} text="Salvar"></MaterialButton>
            </form>
        </div>
    )
}