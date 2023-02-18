import styled from "styled-components";

import Select from "react-select";

export const StyledSelect = styled(Select).attrs({
    styles: {
        control: (provided, state) => ({
            ...provided,
            backgroundColor: "#fff",
            padding: "5px",
            border: 0,
            boxShadow: "none",
            cursor: "pointer",
            "&:hover": {
                boxShadow: "1px 1px 0 0 #e4e4e4, -1px -1px 0 0 #e4e4e4",
            },
            boxShadow: state.isFocused ? "1px 1px 0 0 #e4e4e4, -1px -1px 0 0 #e4e4e4" : "none",
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: "pointer",
            backgroundColor: state.isSelected ? "#e4e4e4" : "#fff", 
            "&:hover": {
                backgroundColor: "#e4e4e4",
            },
        }),
    },
})`
    width: 700px;
    margin: 0 auto;
    margin-bottom: 40px;
`;