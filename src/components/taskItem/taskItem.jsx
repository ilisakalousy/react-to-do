import React, { useState } from "react";
import { Reorder } from "framer-motion";
import { StyledStrong, StyledTask, StyledParagraph, StyledImportant } from "./styles";
import { StyledStar, StyledFire, StyledButton, StyledDots, KebabMenu, InitFire, InitStar, InitWrapper } from "./styles";

function TaskItem({ task, setIsShowTaskPopup, remove }) {
    const [isChosenStar, setIsChosenStar] = useState(false);
    const [isChosenFire, setIsChosenFire] = useState(false);
    const [isKebabShown, setIsKebabShown] = useState(false);

    const importantCLick = (e) => {
        setIsChosenStar(!isChosenStar);
    };

    const removeClick = (e) => {
        remove(task);
        e.stopPropagation();
    };

    const fireClick = (e) => {
        setIsChosenFire(!isChosenFire)
    };

    return (
        <Reorder.Item 
            value={task}
            whileDrag={{
                scale: 1.05,
                zIndex: 1,
            }} 
        >
            <StyledTask onMouseLeave={() => setIsKebabShown(false)}>
                <StyledButton onClick={removeClick}></StyledButton>
                <div>
                    <StyledStrong>{task.title}</StyledStrong>
                    <StyledParagraph>{task.body}</StyledParagraph>
                </div>
                <InitWrapper>
                    <InitFire isChosenFire={isChosenFire} onClick={() => setIsChosenFire(false)} />
                    <InitStar isChosenStar={isChosenStar} onClick={() => setIsChosenStar(false)} />
                </InitWrapper>
                <StyledDots onMouseEnter={() => setIsKebabShown(true)}>
                </StyledDots>
                <KebabMenu isShown={isKebabShown}>
                    <StyledFire isChosenFire={isChosenFire} onClick={fireClick} />
                    <StyledStar isChosenStar={isChosenStar} onClick={importantCLick} />
                </KebabMenu> 
            </StyledTask>
        </Reorder.Item>
    )
};

export default TaskItem;