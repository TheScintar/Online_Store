import React from 'react'
import { useContext } from 'react';
import {Context} from "../index"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink} from 'react-router-dom';
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import {Button, Container} from 'react-bootstrap';
import { observer } from "mobx-react-lite"
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const{user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
      user.setUser({})
      user.setIsAuth(false)
      localStorage.setItem("token", null)
    }

  return (
    <Navbar bg="dark" data-bs-theme="dark">
          <Container>
          <NavLink style={{color: 'white', text_decoration: 'none'}} to={SHOP_ROUTE}>Онлайн магазин</NavLink>
          {user.isAuth ?
              <Nav className="ml-auto" style={{color: 'white', marginLeft: 'auto'}}>
                  <Button 
                  variant={'outline-light'} 
                  onClick={() => history(ADMIN_ROUTE)}
                  >
                    Админ панель
                  </Button>
                  <Button 
                  variant={'outline-light'} 
                  onClick={() => history(BASKET_ROUTE)}
                  style={{marginLeft: '10px'}}
                  >
                    Корзина
                  </Button>
                  <Button 
                  variant={'outline-light'} 
                  onClick={() => logOut()}
                  style={{marginLeft: '10px'}}
                  >
                    Выйти
                  </Button>
             </Nav>
              :
              <Nav className="ml-auto" style={{color: 'white', marginLeft: 'auto'}}>
                  <Button variant={'outline-light'} onClick={() => history(LOGIN_ROUTE)}>Авторизация</Button>
             </Nav>
          }
          </Container>
      </Navbar>
  )
})

export default NavBar