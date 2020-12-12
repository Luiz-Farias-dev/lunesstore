import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
    background: #FFF;
    border-radius: 5px;
    img{
        &:hover{
        opacity: 0.1 ;
        transition:0.2s;
        
    }
    }
`;

export const Cart = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 10px;
    transition: 0.2s;
    
    &:hover{
        opacity: 0.1 ;
        
        
    }

    div{
        margin-right: 5px;
        text-align: right;
    }
    strong{
        display: block;
        color: black;
    }
    span{
        font-size: 13px;
        color: black;
    }
`;