import { useState, type ChangeEvent } from "react";

type CounterProps = {
    initCount : number
}

// another way of writing the function
//function Counter(props: CounterProps){}
const Counter : React.FC<CounterProps> = ({initCount}) => {

    const [count, setCount] = useState(initCount); //  managing the state with useState hook

    function inc(){
        console.log("Incrementing the count");
        setCount(count + 1);
        setCount(count + 1); // even if we call setCount twice, the count will only increment by 1, as the state updates are batched together        

        setCount((count) => count + 1); // this will increment the count by 1, as we are using the functional form of setState, which takes the previous state as an argument
        setCount((count) => count + 1); // calling it twice will increment the count by 2, as we are using the callback, which will be executed after the state has been updated
        console.log("Count after increment: ", count); // this will not update the UI, as initCount is not a state variable
    }

    // since the form field value is changed via state. The state also needs to be updated to avoid (onChange error)
    function handleOnChange(evt: ChangeEvent<HTMLInputElement>){
            setCount(evt.target.valueAsNumber); // this will update the count with the value entered in the input field, using the valueAsNumber property to get the numeric value from the input
    }

    return (
        <div>
            <h4> Count: {count} </h4>
            <div>
                <button onClick={inc}>++</button> &nbsp;                
                <button onClick={() => setCount(count - 1)}>--</button> &nbsp; <br></br> {/* using an inline arrow function to decrement the count */}
                <input type="number" value={count} placeholder="Please enter count" onChange={handleOnChange} />  {/*  allowing the user to input a number to set the count, using an inline arrow function */}
            </div>
        </div>
    )
}

export default Counter;