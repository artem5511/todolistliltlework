import React from 'react';
import {DataTasksType} from '../App';

type TasksPropsType = {
    data1: DataTasksType
    data2: DataTasksType
}

const Tasks = (props: TasksPropsType) => {
    return (
        <>
            {props.data1}
            {props.data1}
        </>
    );
};

export default Tasks;