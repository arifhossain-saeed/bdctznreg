import { useState } from "react";

const useToggleState = (initVal = false) => {
    const [state, setState] = useState(initVal);
    const toggle = () => {
        setState(!state);
    }
    return [state, toggle];
}

export default useToggleState;