import styled from 'styled-components';

export const TecnologiesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 64rem;
    justify-items: center;
    align-items: center;
    justify-content: space-around;
    margin: 5rem auto;
    div{
        .engrenagens{
            position: absolute;
            top:10%;
            left:50%;
            margin-top:-50px;
            margin-left:-150px;
        }
        .box{
            width: 400px;
            height: 400px;
        }
        .antiHorario{
            animation: giraAntihorario 20s linear infinite;
        }
        .horario{
            border: 1px solid #160637;
            border-radius: 50%;
            animation: gira 20s linear infinite;
            display: grid;
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 90%;
            svg{
                position: relative;
                top: 33%;
                background-color: #fff;
                box-shadow: 1px #000;
            }
        }
        @keyframes gira {
            to {
                transform: rotate(360deg);
            }
        }
        @keyframes giraAntihorario {
            to {
                transform: rotate(-360deg);
            }
        }
    }
`
export const IconsContent = styled.div`
    img{
        width: 3rem;
        height: 3rem;
        position: relative;
        bottom: 1rem;
    }
`