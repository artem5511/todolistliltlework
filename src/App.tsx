import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import Rating from './components/Rating';

//function declaration
function App() {
    console.log("App rendering")
    //полезное что то
    //обязана вернуть JSX
    return (
        <div className="App">
            <AppTitle/>
            <Rating/>
            <Accordion/>
            <Rating/>
        </div>
    );
}

 function AppTitle() {
     console.log("AppTitle rendering")
return <>This is APP component</>
}
export default App;
