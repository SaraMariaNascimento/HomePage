import styled from 'styled-components';

export const BannerWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: linear-gradient(#fff,#E2F1FF);
    justify-items: center;
    align-items: center;
    padding: 0 5rem;
`
export const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 30rem;
    h2{
        font-size: 3rem;
        color: #000;
        margin-bottom: 0;
    }
    p{
        font-size: 1rem;
        font-weight: 500;
        color: #000;
    }

`
export const ButtonsSection = styled.div`
    
    button{
        width: 8rem;
        height: 2.375rem;
        border-radius: 2rem;
        border: none;
        &:hover{
            opacity: .8;
        }
    }
    a{
        font-size: .875rem;
        text-decoration: none;
    }
    .start{
        margin-right: .8rem;
        background-color: #722ED1;
        a{
            color: #fff;
        }
    }
    .LearnMore{
        background-color: #fff;
        a{
            color: #722ED1;
        }
    }

`