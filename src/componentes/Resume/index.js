import React from "react";
import * as C from './styles'
import ResumeItem from "../ResumeItem";
import {
    BsFillArrowUpCircleFill,
    BsFillArrowDownCircleFill,
    BsCurrencyDollar
} from "react-icons/bs";

const Resume = ({income, expense, total}) => {
    return (
        <C.Container> 
            <ResumeItem title="Entradas" Icon={BsFillArrowUpCircleFill} value={income} />
            <ResumeItem title="Saídas" Icon={BsFillArrowDownCircleFill} value={expense} />
            <ResumeItem title="Total" Icon={BsCurrencyDollar} value={total} />
        </C.Container>
    )
}

export default Resume