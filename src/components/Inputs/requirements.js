import React, { useState } from "react";

export const Requirements = () => {
    const [focused, setFocused] = useState("false");
    const [openError, setOpenError] = useState(false);
    const [type, setType] = useState(props?.type);

    return ({focused, setFocused, openError, setOpenError, type, setType})
}