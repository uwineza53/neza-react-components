import React, { useState } from "react";

export const Requirements = () => {
    const [isOpen, setIsOpen] = useState(false);

    return ({ isOpen, setIsOpen });
}