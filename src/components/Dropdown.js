import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";


function Dropdown({ options, value, onChange }) {

    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }

            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        const cleanUp = () => {
            document.removeEventListener('click', handler);
        };
        document.addEventListener('click', handler, true);
        return cleanUp;
        // return () => {
        //     document.removeEventListener('click', handler);
        // }
    }, []);

    const handleOpenClick = (openState) => {
        setIsOpen((currentIsState) => {
            console.log(openState);
            console.log(currentIsState);
            return !currentIsState
        });
    }

    const handleOptionClick = (option) => {
        console.log(option);
        setIsOpen(false);
        onChange(option);
    }


    // let content = 'Select...';
    // if (selection) {
    //     content = selection.label;
    // }

    const renderedOptions = options.map((option, index) => {
        // const isExpanded = index === selection;
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1"
                key={option.value}
                onClick={() => handleOptionClick(option)}>
                {option.label}
            </div>

        )
    });
    return (
        <div ref={divEl} className="w-48 relative" >
            <Panel className="flex justify-between items-center cursor-pointer"
                onClick={() => handleOpenClick(isOpen)}>
                {value?.label || 'Select...'}
                {<GoChevronDown className="text-2xl" />}
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full">
                    {renderedOptions}
                </Panel>
            )}
        </div>
    )
}

export default Dropdown;