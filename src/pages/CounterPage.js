import produce from 'immer';
import Button from "../components/Button";
import { useReducer } from "react";
import Panel from "../components/Panel";

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'set-value-to-add';
const ADD_VALUE_TO_COUNT = 'add-from-form';


const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT_COUNT:
            // return {
            //     ...state,
            //     count: state.count + 1,
            // }
            state.count = state.count + 1;
            return;
        case DECREMENT_COUNT:
            // return {
            //     ...state,
            //     count: state.count - 1,
            // }
            state.count = state.count - 1;
            return;
        case SET_VALUE_TO_ADD:
            // return {
            //     ...state,
            //     valueToAdd: action.payload,
            // }
            state.valueToAdd = action.payload;
            return;
        case ADD_VALUE_TO_COUNT:
            // return {
            //     ...state,
            //     count: state.count + state.valueToAdd,
            //     valueToAdd: 0,
            // }
            state.count = state.count + state.valueToAdd;
            state.valueToAdd = 0
            return;
        default:
            // throw new Error('unexpected action type: ' + action.type);
            return;
    }

    // if (action.type === INCREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count: state.count + 1,
    //     }
    // };
    // if (action.type === DECREMENT_COUNT) {
    //     return {
    //         ...state,
    //         count: state.count - 1,
    //     }
    // };
    // if (action.type === SET_VALUE_TO_ADD) {
    //     return {
    //         ...state,
    //         valueToAdd: action.payload
    //     }
    // };
    // if (action.type === FORM_ADD) {
    //     return {
    //         ...state,
    //         count: action.payload,
    //         valueToAdd: 0
    //     }
    // }
    // return state;
};

function CounterPage({ initialCount }) {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0
    })
    const increment = (counter) => {
        // setCount((counter) => {
        //     return counter + 1;
        // });
        dispatch({
            type: INCREMENT_COUNT
        });
    };

    const decrement = (counter) => {
        // setCount((counter) => {
        //     return counter - 1;
        // });
        dispatch({
            type: DECREMENT_COUNT
        });
    };
    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value)
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
        dispatch({
            type: ADD_VALUE_TO_COUNT,
        });
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">
                Count is {state.count}
            </h1>
            <div className="flex flex-row">
                <Button onClick={() => increment(state.count)}>Increment</Button>
                <Button onClick={() => decrement(state.count)}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot</label>
                <input value={state.valueToAdd || ''} onChange={handleChange} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300"></input>
                <Button>Add it</Button>
            </form>

        </Panel>
    )
}

export default CounterPage;