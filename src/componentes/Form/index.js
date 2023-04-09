import React, { useState } from "react";
import * as C from "./styles";

const Form = () => {
    const [desc,setDesc] = useState("")
    const[amout,setAmout] = useState("")
    const[isExpense,setExpense] = useState(false)

    const handleSave = () => {
        if(!desc || amout) {
            alert("Informe a descriçao e o valor!");
            return;
        } else if(amout < 1) {
            alert("O valor tem que ser positivo!")
            return;
        }
    };


    return(
        <>
            <C.Container>
                <C.InputContent>
                    <C.Label>Descriçåo</C.Label>
                    <C.Input value={desc} onChange={(e) => setDesc(e.tardet.value)} />
                </C.InputContent>
                <C.InputContent>
                    <C.Label>Valor</C.Label>
                    <C.Input
                        value={amout}
                        type="number"
                        onChange={(e) => setAmout(e.target.value)}
                    />
                </C.InputContent>
                <C.RadioGroup>
                    <C.Input
                        type="radio"
                        id="rIncome"
                        defaultChecked
                        name="group1"
                        onChange={() => setExpense(!isExpense)} 
                    />
                    <C.Label htmlFor="rIncome">Entrada</C.Label>
                    <C.Input
                        type="radio"
                        id="rExpenses"
                        name="group1"
                        onChange={() => setExpense(!isExpense)} 
                    />
                    <C.Label htmlFor="rExpense">Saida</C.Label>
                </C.RadioGroup>
            </C.Container>
        </>
    )
}

export default Form