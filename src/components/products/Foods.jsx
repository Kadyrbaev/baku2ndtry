import React from 'react'
import styled from 'styled-components'
import FoodsItem from './FoodsItem'
import backImg from "./../../assets/images/фон2 2.png"

const foods = [
    {
        title: "BESHBARMAK",
        price: 500,
        description: "tytuio",
        img: "",
        id: "1s"
    },
    {
        title: "ASH",
        price: 500,
        description: "tytuio",
        img: "",
        id: "2s"
    },
    {
        title: "CHUCHUK",
        price: 500,
        description: "tytuio",
        img: "",
        id: "3s"
    },
    {
        title: "KUURDAK",
        price: 500,
        description: "tytuio",
        img: "",
        id: "4s"
    },
    {
        title: "BYZHY",
        price: 500,
        description: "tytuio",
        img: "",
        id: "5s"
    },
]

const Foods = () => {
  return (
    <FoodsContainer>
        <FoodsImg src={backImg} alt="" />
        <h1>НАШИ БЛЮДЫ</h1>
        <FoodItemContainer>
            {
                foods.map((el)=>{
                    return <FoodsItem 
                            key={el.id}
                            title={el.title} 
                            price={el.price} 
                            description={el.description} 
                            id={el.id} 
                          />
                })
            }
        </FoodItemContainer>
    </FoodsContainer>
  )
}

export default Foods

const FoodsContainer = styled.div`
    position: relative;
    width: 1095px;
    margin: auto;
    border: 1px solid;
`
const FoodsImg = styled.img`
    width: 1095px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
`
const FoodItemContainer = styled.div`
    border: 2px solid;
    display: flex;
    align-items: center;
    margin-top: 20px;
    flex-wrap: wrap;
    gap: 80px;
`