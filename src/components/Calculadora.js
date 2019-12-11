import React from 'react';

import Teclado from './Teclado';


export default class Calculadora extends React.Component{
    
    render(){

        return ( 
            <div>
                <p>
                    <h3 align="center">
                        Voitto Treinamentos - Calculadora em React.js<br />
                    </h3>
                </p>
                
                <Teclado/>

                <p>
                    <h4 align="center">
                        @douglasabnovato <br />
                    </h4>
                </p>
            </div>
            
        )

    }

}