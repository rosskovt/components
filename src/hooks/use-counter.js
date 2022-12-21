import { useState, useEffect } from "react";

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);

    const increment = (counter) => {
        setCount((counter) => {
            return counter + 1;
        });
    };

    useEffect(() => {
        console.log(count);
    }, [count]);

    return {
        count,
        increment,
    }
}

export default useCounter;