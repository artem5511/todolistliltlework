import React from 'react';

const Accordion = (props: any) => {
    console.log("Accordion rendering")
    return (
        <div>
            <AccordionTitle title={props.title} />
            <AccordionBody/>
        </div>
    );
};

const AccordionTitle = (props: any) => {
    console.log("AccordionTitle rendering")
    return <div><h3>{props.title}</h3></div>
};

const AccordionBody = () => {
    console.log("AccordionBody rendering")
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>

};
export default Accordion;