import { createGlobalStyle } from 'styled-components';
import Background from '../assets/images/talon.png';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    
    body{
        background: #6e0404 url(${Background}) no-repeat left top;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button{
        font: 14px JetBrains Mono;
    }
    #root{
        max-width: 1020px;
        margin: 0 auto;
        padding: 0 20px 50px;
    }

    button{
        cursor: pointer;
    }
`;