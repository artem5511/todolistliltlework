import React from 'react';

const Accordion = () => {
    console.log("Accordion rendering")
    return (
        <div>
        <AccordionTitle/>
        <AccordionBody/>
        </div>
    );
};

const AccordionTitle = () => {
    console.log("AccordionTitle rendering")
    return <div><h3>Меню</h3></div>
};

const AccordionBody = () => {
    console.log("AccordionBody rendering")
    return <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
};
export default Accordion;