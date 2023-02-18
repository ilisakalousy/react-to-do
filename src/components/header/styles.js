import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: red;
    height: 50px;
    background-color: ${props => props.theme.blackThemeBg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
`;

export const StyledButton = styled.button`
    width: ${props => props.theme.btnSize};
    height: ${props => props.theme.btnSize};
    border: none;
    color: ${props => props.theme.whiteColor};
    background-color: ${props => props.theme.blackThemeBg};
    cursor: pointer;
    border-radius: 5px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    font-weight: 300;
    align-items: center;
    padding: 0; 
    position: relative;

    &::before {
        position: absolute;
        content: "";
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg fill='%23ffffff' width='800px' height='800px' viewBox='0 0 1920 1920' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M915.744 213v702.744H213v87.842h702.744v702.744h87.842v-702.744h702.744v-87.842h-702.744V213z' fill-rule='evenodd'/%3E%3C/svg%3E");

    }

    &:hover {
        background-color: #616161;
    }
`;

export const SearchWrapper = styled.div`
    width: 300px;
    height: 25px;
    background-color: transparent;
    margin: 0;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg fill='%23000000' width='800px' height='800px' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m14.91 13.09-3.68-3.21a4.86 4.86 0 0 0 .86-2.77A5.34 5.34 0 0 0 6.59 2a5.35 5.35 0 0 0-5.5 5.15 5.34 5.34 0 0 0 5.5 5.15 5.71 5.71 0 0 0 3.82-1.44L14.08 14zM6.59 11a4.09 4.09 0 0 1-4.25-3.9 4.09 4.09 0 0 1 4.25-3.9 4.09 4.09 0 0 1 4.25 3.9A4.08 4.08 0 0 1 6.59 11z'/%3E%3C/svg%3E");
        top: 3px;
        left: 3px;
    }
`;

export const SearchInput = styled.input`
    width: 250px;
    padding: 5px 5px 5px 34px;
    height: 15px;
    background-color: #949494;
    margin: 0;
    font-size: 14px;
    border: none;

    &:hover {
        background-color: ${props => props.theme.whiteColor};
    }

    &:focus {
        outline: none;
        background-color: ${props => props.theme.whiteColor};
    }

    &::placeholder {
        color: #000;
    }
`;

export const LeftHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding-left: 50px;
`;

export const RightHeader = styled.div`
    display: flex;
   justify-content: space-between;
   align-items: center;
   padding-right: 50px;
`;

export const HeaderBurger = styled.span`
    width: 25px;
    height: 25px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    position: relative;
    margin-right: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #616161;
    }

    &::before {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_429_11066)'%3E%3Cpath d='M3 6.00092H21M3 12.0009H21M3 18.0009H21' stroke='white' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_429_11066'%3E%3Crect width='24' height='24' fill='white' transform='translate(0 0.000915527)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E");
        pointer-events: none;
    };
`;