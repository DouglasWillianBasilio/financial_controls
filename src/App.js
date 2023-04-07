import React from "react";
import GlobalStyle from "./styles/global";
import Headers from "./componetes/header/Header";
import Resume from "./componetes/header/Resume";
const App = () => {
    return (
    <>
        <Headers />
        <Resume />
        <GlobalStyle />
    </>
    )
};

export default App;