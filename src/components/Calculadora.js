import React from 'react';

import Teclado from './Teclado';
import Visor from './Visor';

import "./App.css";

import { calculadoraStore } from '../flux/CalculadoraStore';

export default class Calculadora extends React.Component{
    
    constructor(props){
        super(props)
        this.state = calculadoraStore.getState()
    }
    
    componentWillMount(){
        calculadoraStore.on('change', () => {
            this.setState( calculadoraStore.getState() )
        })
    }

    render(){

        return ( 
            <div id="calculadora"> 
                <p>
                    <h3 align="center">
                        Voitto Treinamentos - Calculadora em React.js<br />
                    </h3>
                </p>

                <form name="calculator">
                    <Visor type="textfield" name="ans" value={this.state.valorDoDisplay} />                                     
                    <Teclado/>
                </form>

                <p>
                    <h4 align="center">
                        @douglasabnovato <br />
                    </h4>
                </p>
            </div>
            
        )

    }

}