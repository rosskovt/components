import { useState } from "react";

function Dropdown({ options }) {

    const [selection, setSelection] = useState(-1);
    const renderedOptions = options.map((option, index) => {
        const isExpanded = index === selection;
        return (
            <div key={option.value}>
                <option>{option.label}</option>
                {option.value}
            </div>

        )
    });
    return (
        <div>{renderedOptions}</div>
    )
}

export default Dropdown;