import React, {useState} from "react";

const useInputState = (initVal) => {
    const [value, setValue] = useState(initVal);

    const handleValChange = (e) => {
            setValue(e.target.value);
    }

    const resetVal = () => {
        setValue("");
    }
    return [value, handleValChange, resetVal];
}

export default useInputState;