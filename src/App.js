import React from "react";
import Global from "./styles/global";
import Header from "./componentes/Header";
import Resume from "./componentes/Resume";
import Form from "./componentes/Form";


const App = () => {
    return (
    <>
        <Header />
        <Resume />
        <Form />
        <Global />
    </>
    );
};

export default App;