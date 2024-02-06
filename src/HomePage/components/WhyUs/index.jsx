import React from 'react';
import { BenefitsContent, TextBenefits, ProductsSolidus, Product } from './styled';

function Solutions() {

  return (
    <>
      <BenefitsContent>
        <TextBenefits>
          <h2>Get actionable insights from Big Data in 3 steps</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </TextBenefits>
        <ProductsSolidus>
          <Product>
              <img src="https://i.ibb.co/fGRN4pH/Design-sem-nome.png" alt="Icone de desenvolvimento web"/>
              <h3>Valuable business insights</h3>
              <p>Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights.</p>
          </Product>
          <Product>
              <img src="https://i.ibb.co/fGRN4pH/Design-sem-nome.png" alt="Icone de desenvolvimento web"/>
              <h3>Valuable business insights</h3>
              <p>Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights.</p>
          </Product>
          <Product>
              <img src="https://i.ibb.co/fGRN4pH/Design-sem-nome.png" alt="Icone de desenvolvimento web"/>
              <h3>Valuable business insights</h3>
              <p>Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights.</p>
          </Product>
        </ProductsSolidus>
      </BenefitsContent>
    </>
  )
}

export default Solutions
