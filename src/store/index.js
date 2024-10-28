import { createContext, useState } from "react";

export const FoodsContext = createContext()

const FoodsWrapper = (props)=>{
    const [counter, setCounter] = useState(0)
    const [basket, setBasket] = useState([])
    console.log(basket);
    

    const plus=()=>{
        setCounter(counter+1)
    }

    const getData=(data)=>{
        setBasket([...basket, data])
    }

    const value = {
        counter,
        plus,
        getData
    }
    return <FoodsContext.Provider value={value}>{props.children}</FoodsContext.Provider>
}
export default FoodsWrapper