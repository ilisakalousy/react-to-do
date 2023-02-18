import styled from "styled-components";


export const StyledCounter = styled.span`
    width: 30px;
    height: ${props => props.theme.btnSize};
    border: none;
    color: ${props => props.theme.whiteColor};
    background-color: ${props => props.theme.blackThemeBg};
    cursor: pointer;
    border-radius: 5px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    padding: 0; 
    margin-right: 30px;

    &:hover {
        background-color: #616161;
    }
`;