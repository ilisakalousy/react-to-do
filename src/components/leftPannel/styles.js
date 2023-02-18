import styled from "styled-components";

export const StyledLeftPannel = styled.div`
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: ${props => props.isActive ? "0px" : "-250px"};
    background-color: ${props => props.theme.whiteColor};
    padding-top: 150px;
    transition: 0.4s ease;
`;

