import React, { useState } from "react";

import { StyledArea, StyledInput, StyledButton, StyledForm } from "./styles";

function TaskForm({ create }) {
    const [task, setTask] = useState({title: '', body: ''});
    
    const isButtonEnabled = task.title || task.body;

    const addNewTask = (e) => {
        e.preventDefault();
        const newTask = {
            ...task, id: Date.now(),
        };
        create(newTask);
        setTask({title: '', body: ''});
    };

    return (
        <StyledForm>
            <StyledInput 
                placeholder="Заголовок задачи:"
                onChange={e => setTask({...task, title: e.target.value})} 
                value={task.title}
            />
            <StyledArea 
                placeholder="Описание задачи:" 
                onChange={e => setTask({...task, body: e.target.value})}
                value={task.body} 
            />
            <StyledButton disabled={!isButtonEnabled} onClick={addNewTask} />
        </StyledForm>
    )
};

export default TaskForm;