import React from "react";
import * as C from './styles'
import ResumeItem from "../ResumeItem";
import {
    BsFillArrowUpCircleFill,
    BsFillArrowDownCircleFill,
    BsCurrencyDollar
} from "react-icons/bs";

const Resume = () => {
    return (
        <C.Container> 
            <ResumeItem title="Entradas" Icon={BsFillArrowUpCircleFill} value="100" />
            <ResumeItem title="Saídas" Icon={BsFillArrowDownCircleFill} value="100" />
            <ResumeItem title="Total" Icon={BsCurrencyDollar} value="200" />
        </C.Container>
    )
}

export default Resume