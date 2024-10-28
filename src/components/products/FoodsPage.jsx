import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Foods from './Foods'
import backImg from "./../../assets/images/фон 2 (1).png"
import MainProduct from './MainProduct'

const FoodsPage = () => {
  return (
    <div>
        <ImageContainer>
            <Image src={backImg} alt="" />
            <Header/>
            <MainProduct/>
        </ImageContainer>
        <Foods/>
    </div>
  )
}

export default FoodsPage

const ImageContainer = styled.div`
    width: 1095px;
    height: 620px;
    margin: auto;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
`