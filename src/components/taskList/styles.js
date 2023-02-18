import styled from "styled-components";

export const StyledList = styled.div`
    max-width: 700px;
    margin: 0 auto;
    padding: 30px;
    min-height: 100vh;
    background-color: ${props => props.theme.whiteColor};
    display: flex;
    flex-direction: column; 
    align-items: center;
    padding-top: 80px;
`;