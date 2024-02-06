import styled from 'styled-components';

export const BenefitsContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5rem;
    align-items: center;
`

export const TextBenefits = styled.div`
    text-align: center;
    margin: 0 auto;
    p{
        color: #8989A2;
        max-width: 40rem;
    }
`

export const ProductsSolidus = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`
export const Product = styled.div`
    display: flex;
    flex-direction: column;
    width: 19rem;
    align-items: center;
    text-align: center;
    img{
        width: 5rem;
        height: 5rem;
    }
    p{
        color: #8989A2;
    }
`