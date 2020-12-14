import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import logo from '../../assets/images/Logo.png';
import { Container, Cart } from './styles';


function Components() {
  return (
      <Container>
        <Link to="/">
         <img src={logo} alt="lunestore" />
        </Link>
        <Cart>
          <div>
            <Link to="/cart"> 
          <strong>Meu Carrinho</strong>
           </Link>
          <span>3 itens</span>
          </div>
          <Link to="/cart"> 
          <MdShoppingBasket size={36} color= "#141212" />
          </Link>
        </Cart>
      </Container>
  );
}

export default Components;