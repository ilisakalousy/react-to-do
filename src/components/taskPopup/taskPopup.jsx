import React from "react";

import { TaskPopupWrapper, TaskPopupBody } from "./styles";
import { StyledInput, StyledArea } from "../taskForm/styles";

function TaskPopup({children, isShow, setIsShowTaskPopup }) {
    return isShow ? (
        <TaskPopupWrapper onClick={() => setIsShowTaskPopup(false)}>
            <TaskPopupBody onClick={e => e.stopPropagation()}>
                {children}
            </TaskPopupBody>
        </TaskPopupWrapper>
    ) : null;
};

export default TaskPopup;