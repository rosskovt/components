import { useState } from "react";
import Dropdown from "./components/Dropdown";


function App() {
    const [selection, setSelection] = useState(null);

    const handleSelection = (option) => {
        setSelection(option);
    }
    console.log(selection);
    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
    ];

    return (
        <div><Dropdown
            options={options}
            value={selection}
            onChange={handleSelection} />
        </div>
    )

};

export default App;