import React from "react";
import { TecnologiesWrapper, IconsContent } from './styled';

function Tecnologies(){
    return(
        <TecnologiesWrapper>
            <div className="engrenagens">
                <div className="box horario">
                    <IconsContent><img src="https://i.ibb.co/RvZPvmW/react.png"/></IconsContent>
                    <IconsContent><img src="https://i.ibb.co/Jc9WdsK/Sass.png"/></IconsContent>
                </div>
                {/* <div class="box two antiHorario">
                    <div><FaSass /></div>
                </div> */}
            </div>
        
            <div>
                <h2>Launch with the best tecnologies</h2>
                <p>
                A centralized platform that integrates zillions of data sources using Big Data ELT (Extract, Load & Transform) that leaves no data behind
                </p>
            </div>
        </TecnologiesWrapper>
    )
}

export default Tecnologies

