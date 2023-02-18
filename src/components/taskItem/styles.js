import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as Fire } from "../../assets/fire.svg";
import { ReactComponent as Dots } from "../../assets/dots.svg";

export const StyledTask = styled.div`
    width: 500px;
    min-height: 50px;
    padding: 15px;
    border-bottom: 1px solid #e4e4e4;
    display: flex;
    position: relative;
    cursor: pointer;

    &:hover {
        background-color: rgb(250,250,250);
    }
`;

export const StyledDots = styled(Dots)`
    stroke: gray;
    position: absolute;
    right: 0px;
    top: 5px;
    width: 25px;  
    height: 25px;
    background-color: transparent;

    &:hover {
        stroke: black;
    }
`;

export const KebabMenu = styled.div`
    position: absolute;
    display: ${props => props.isShown ? "flex" : "none"};
    width: 30px;
    flex-direction: column;
    background: #fff;
    top: 35px;
    right: -2px;
    height: 50px;
    align-items: center;
    border: 1px solid #e4e4e4;
    border-radius: 5px;
`;

export const StyledStar = styled(Star)`
    fill: ${props => props.isChosenStar ? "#FFEA00" : "none"};
    stroke: ${props => props.isChosenStar ? "orange" : "gray"};
    width: 25px;  
    height: 25px;

    &:hover {
        stroke: ${props => props.isChosenStar ? "orange" : "black"};
    };

`;

export const InitFire = styled(Fire)`
    width: 25px;
    height: 25px;
    display: ${props => props.isChosenFire ? "block" : "none"};
    fill: ${props => props.isChosenFire ? "#FF5733" : "none"};
    stroke: ${props => props.isChosenFire ? "#C70039" : "transparent"};
`;

export const InitStar = styled(Star)`
    width: 25px;
    height: 25px;
    display: ${props => props.isChosenStar ? "block" : "none"};
    fill: ${props => props.isChosenStar ? "#FFEA00" : "none"};
    stroke: ${props => props.isChosenStar ? "orange" : "transparent"};
`;

export const InitWrapper = styled.div`
    width: 50px;
    height: 25px;
    position: absolute;
    display: flex;
    flex-direction: row-reverse;
    background-color: transparent;
    bottom: 5px;
    right: 0px;
`;

export const StyledFire = styled(Fire)`
    fill: ${props => props.isChosenFire ? "#FF5733" : "none"};
    stroke: ${props => props.isChosenFire ? "#C70039" : "gray"};
    width: 25px;
    height: 25px;

    &:hover {
        stroke: ${props => props.isChosenFire ? "#C70039" : "black"};
    };
`;

export const StyledStrong = styled.strong`
    font-wight: 700;
    font-size: 18px;
    margin: 0;
    max-width: 500px;
    word-break: break-all;
`;  

export const StyledParagraph = styled.p`
    font-size: ${props => props.theme.bodyFS};
    font-weight: 400;
    margin: 0;
    max-width: 500px;
    word-break: break-all;
`;

export const StyledButton = styled.button`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: transparent;
    border: none;
    background-color: ${props => props.theme.blackThemeSemi};
    border: 2px solid ${props => props.theme.blackThemeBg};
    margin-right: 8px;
    cursor: pointer;
    margin-top: 4px;

    &:hover {
        background-color: #616161;
    }
`;