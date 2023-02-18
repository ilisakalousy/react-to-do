import styled from "styled-components";

export const StyledForm = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledButton = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    color: ${props => props.theme.whiteColor};
    background-color: ${props => props.theme.blackThemeBg};
    cursor: pointer;
    margin-top: 15px;
    border-radius: 5px;
    align-self: flex-end;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 300;
    padding: 0;

    &:hover {
        background-color: #646464;
    }

    &:disabled {
        background-color: #646464;
    }

    &::before {
        position: absolute;
        content: "";
        width: 20px;
        height: 20px;
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg fill='%23ffffff' width='800px' height='800px' viewBox='0 0 1920 1920' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M915.744 213v702.744H213v87.842h702.744v702.744h87.842v-702.744h702.744v-87.842h-702.744V213z' fill-rule='evenodd'/%3E%3C/svg%3E");

    }
`;

export const StyledArea = styled.textarea`
    width: 100%;
    height: 250px;
    border: none;
    border-bottom: 2px solid ${props => props.theme.bodyThemeBg};
    font-size: 16px;
    color: ${props => props.theme.blackColor};
    margin-top: 15px;
    resize: none;
    padding: 5px;
    font-family: 'Nunito', sans-serif;

    &:focus {
        outline: none;
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    height: 35px;
    border: none;
    border-bottom: 1px solid ${props => props.theme.bodyThemeBg};
    font-size: 16px;
    color: ${props => props.theme.blackColor};
    padding: 0 5px;
    font-family: 'Nunito', sans-serif;

    &:focus {
        outline: none;
    }
`;