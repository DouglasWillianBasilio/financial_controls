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
            <ResumeItem title="Entradas" Icon={BsFillArrowUpCircleFill}  />
            <ResumeItem title="Saídas" Icon={BsFillArrowDownCircleFill} />
            <ResumeItem title="Total" Icon={BsCurrencyDollar} />
        </C.Container>
    )
}

export default Resume