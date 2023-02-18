import React, { useState } from "react";
import { Reorder } from "framer-motion";
import { StyledList } from "./styles";
import TaskItem from "../taskItem/taskItem";
import TasksSelect from "../select/select";

function TaskList({ tasks, remove, setIsShowTaskPopup, count, setTasks }) {

    return (
        <Reorder.Group axys="y" values={tasks} onReorder={setTasks} style={{ listStyle: "none" }}>
            <StyledList>
                {tasks.map((task, index) => 
                    <TaskItem 
                        setIsShowTaskPopup={setIsShowTaskPopup} c
                        ount={count} 
                        remove={remove}  
                        number={index + 1} 
                        task={task} 
                        key={task.id}
                    />
                )}
            </StyledList>
        </Reorder.Group>
    )
};
export default TaskList;