import React, { useContext } from 'react'
import styled from 'styled-components'
import { FoodsContext } from '../../store'

const FoodsItem = (props) => {
  const context = useContext(FoodsContext)

  const clickHandler=()=>{
    context.plus()
    context.getData(props)
    console.log(props);
    
  }
  
  return (
    <FoodsItemStyle>
        <img src="" alt="" />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <button onClick={clickHandler}>{props.price}</button>
    </FoodsItemStyle>
  )
}

export default FoodsItem


const FoodsItemStyle = styled.div`
    color: white;
    width: 240px;
    height: 268px;
    background-color: #7c7b7b63;
    border-radius: 20px;
    flex-wrap: wrap;
    
    button{
      padding: 6px 20px;
      cursor: pointer;
    }
`