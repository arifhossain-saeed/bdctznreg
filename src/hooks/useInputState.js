import React, {useState} from "react";

const useInputState = (initVal) => {
    const [value, setValue] = useState(initVal);

    const handleValChange = (e) => {
            setValue(e.target.value);
    }

    const setPreferredValue = (param) => {
        setValue(param)
    }

    const resetVal = () => {
        setValue("");
    }
    return [value, handleValChange, setPreferredValue, resetVal];
}

export default useInputState;