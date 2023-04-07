import React from "react";
import GlobalStyle from "./styles/global";
import Header from "./componentes/Header";
import Resume from "./componentes/Resume";


const App = () => {
    return (
    <>
        <Header />
        <Resume />
        <GlobalStyle />
    </>
    )
};

export default App;