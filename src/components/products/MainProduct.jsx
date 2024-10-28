import React from 'react'
import styled from 'styled-components'

const MainProduct = () => {
  return (
    <MainStyle>
        <p className='ashkana'>
             KYRGYZ ASHKANASY - оазис восточной культуры, где гости испытывают уникаьное путешествие через изумитетельные вкусы, аутентичную эстетику и безупречное гостеприимство.
        </p>
        <p className='bliudo'>
            Самое большое разнообразие Кыргызких блюд приготовленных лучшими шеф-поварами!
        </p>
        <button>Забронировать столик</button>
    </MainStyle>
  )
}

export default MainProduct


const MainStyle = styled.div`
    color: aliceblue;
    margin-top: 70px;


    .ashkana{
        font-size: 30px;
        width: 800px;
        margin: auto;
        line-height: 45px;
    }
    .bliudo{
        width: 400px;
        margin: auto;
        margin-top: 30px;
    }
`
