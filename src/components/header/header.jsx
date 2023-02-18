import React from "react";

import { StyledHeader } from "./styles";

function Header({ children }) {
    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    )
};

export default Header;