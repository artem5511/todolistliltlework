import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import Rating from './components/Rating/Rating';

//function declaration
function App() {
    console.log("App rendering")
    //полезное что то
    //обязана вернуть JSX
    return (
        <div className="App">
            <PageTitle title={"This is APP component"}/>
            Article 1
            <Rating value={1}/>
            <Accordion title={"Меню1"}/>
            <Accordion title={"Меню333"}/>
            Article 2
            <Rating value={3}/>
            <Rating value={5}/>
        </div>
    );
}

 function PageTitle(props: any) {
     console.log("AppTitle rendering")
return <h1>{props.title}</h1>
}
export default App;
