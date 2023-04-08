import React from "react";
import Global from "./styles/global";
import Header from "./componentes/Header";
import Resume from "./componentes/Resume";

const App = () => {
    return (
    <>
        <Header />
        <Resume />
        <Global />
    </>
    );
};

export default App;