import React from "react";
import * as C from './styles'
import ResumeItem from "../ResumeItem";
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = () => {
    return (
        <C.Container> 
            <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp}  />
            <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} />
            <ResumeItem title="Total" Icon={FaDollarSign} />
        </C.Container>
    )
}

export default Resume