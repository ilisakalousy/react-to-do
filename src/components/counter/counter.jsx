import React from "react";

import { StyledCounter } from "./styles";

function Counter({ count }) {
    return (
        <StyledCounter>
            {count}/5
        </StyledCounter>
    )
};

export default Counter;