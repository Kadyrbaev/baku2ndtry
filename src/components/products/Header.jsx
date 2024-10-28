import { useContext } from "react"
import kyrgyz from "../../assets/icons/KYRGYZ ASHKANASY (1).png"
import styled from 'styled-components'
import { FoodsContext } from "../../store"

const Header = () => {
    const context = useContext(FoodsContext)
    
  return (
    <HeaderStyle>
        <img src={kyrgyz} alt="" />
        <nav>
            <HeaderUl>
                <li>Главная</li>
                <li>О нас</li>
                <li>Отзывы</li>
                <li>Контакты</li>
                <li>Заказать</li>
            </HeaderUl>
        </nav>
        <BasketIcon>
            {context.counter}
        </BasketIcon>
    </HeaderStyle>
  )
}

export default Header



const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 26px;
    `


const HeaderUl = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    color: aliceblue;
    font-size: 18px;
    width: 420px;
    border: 1px solid;
`

const BasketIcon = styled.div`
    border: 1px solid;
    padding: 10px 16px;
    background-color: white;
    border-radius: 50%;
    font-size: 18px;
`