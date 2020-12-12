import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul `
    display: grid;
    grid-template-columns: repeat(3,1fr);
    list-style: none;
    grid-gap: 20px;
    li{
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 5px;
        padding: 20px;
    
        img{
            align-self: center;
            max-width: 230px
        }

        > strong{
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin-top:5px;
        }
        > span{
            font-size: 18px;
            font-weight: bold;
            margin: 10px 0 15px;
        }
        button{
            background: #d60202;
            color: black;
            border: 5px;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto;
            display: flex;
            align-items: center;
            transition: background 0.2s;

            &:hover{
                background: ${darken(0.1, '#d60202')};
            }

            div{
                display: flex;
                align-items: center;
                padding: 6px;
                background: rgba(0, 0, 0, 0.1) ;

                svg{
                    margin-right: 5px;
                }
        
            }
            span{
                flex: 1;
                text-align: center;
                font-weight: bold;
            }
        }
    }    
`;