import React, { useState, useMemo } from "react";
import { GlobalStyle } from "./styles";

import TaskList from "../taskList/taskList";
import PopUp from "../popup/popup";
import TaskForm from "../taskForm/taskForm";
import { StyledButton, SearchInput, SearchWrapper, LeftHeader, HeaderBurger, RightHeader } from "../header/styles";
import Header from "../header/header";
import LeftPannel from "../leftPannel/leftPannel";
import Counter from "../counter/counter";
import TaskPopup from "../taskPopup/taskPopup";
import EditForm from "../editForm/editForm";

function App() {
    const [tasks, setTasks] = useState([]);
    const [isShowPopup, setIsShowPopup] = useState(false);
    const [filter, setFilter] = useState({query: ''});
    const [madeCount, setMadeCount] = useState(0);
    const [isShowTaskPopup, setIsShowTaskPopup] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const createTask = (newTask) => {
        setTasks([...tasks, newTask]);
        setIsShowPopup(false);
    };

    const searchedTasks = useMemo(() => {
        return tasks.filter(task => task.title.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, tasks]);

    const deleteButton = (task) => {
        setTasks(tasks.filter(t => t.id !== task.id));
        setMadeCount(madeCount + 1);
    };

    return (
        <>
            <GlobalStyle />
            <LeftPannel isActive={isActive}></LeftPannel>
            <Header>
                <LeftHeader>
                    <HeaderBurger onClick={() => setIsActive(!isActive)} />
                    <SearchWrapper>
                        <SearchInput 
                            value={filter.query} 
                            onChange={e => setFilter({...filter, query: e.target.value})}
                            placeholder="Поиск..."
                        />
                    </SearchWrapper>
                </LeftHeader>
                <RightHeader>
                    <Counter count={madeCount} />
                    <StyledButton onClick={() => setIsShowPopup(true)}></StyledButton>
                </RightHeader>
            </Header>
            <PopUp isShow={isShowPopup} setIsShowPopup={setIsShowPopup}>
                <TaskForm create={createTask} />
            </PopUp>
            <TaskPopup isShow={isShowTaskPopup} setIsShowTaskPopup={setIsShowTaskPopup}>
                <EditForm />
            </TaskPopup>
            <TaskList setTasks={setTasks} setIsShowTaskPopup={setIsShowTaskPopup} remove={deleteButton} count={madeCount} tasks={searchedTasks} />
        </>
    )
}

export default App;