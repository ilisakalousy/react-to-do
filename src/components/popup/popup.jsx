import React from "react";

import { PopupBody, PopupWrapper } from "./styles";

function PopUp({children, isShow, setIsShowPopup}) {
    return isShow ? (
        <PopupWrapper onClick={() => setIsShowPopup(false)}>
            <PopupBody onClick={e => e.stopPropagation()}>
                {children}
            </PopupBody>
        </PopupWrapper>
    ) : null;
};

export default PopUp;