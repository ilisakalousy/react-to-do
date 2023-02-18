import styled from "styled-components";

export const PopupWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
`;

export const PopupBody = styled.div`
    border-radius: 15px;
    background-color: #fff;    
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 15px 35px;
    max-width: 500px;
    min-height: 350px;
    padding: 30px;
`;