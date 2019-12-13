import React from 'react';

import Teclado from './Teclado';
import Visor from './Visor';

import { calculadoraStore } from '../flux/CalculadoraStore';


export default class Calculadora extends React.Component{
    
    constructor(props){
        super(props)
        this.state = calculadoraStore.getState()
    }

    componentWillMount(){
        calculadoraStore.on('change', ()=>{
            this.setState(calculadoraStore.getState())
        })
    }

    render(){
 
        return ( 
            <div id="calculator"> 

                <p align="center"> 
                    Voitto - Calculator in ReactJS 
                </p>

                <form name="calculator">
                    <Visor type="textfield" value={this.state.valorDoDisplay} />                                     
                    <Teclado 
                        valorNaMemoria={this.state.resultadoUltimaOperacao} 
                        operacaoAnterior={this.state.operacaoAritmetica} 
                        valorVisor={this.state.valorDoDisplay} 
                        limparNaProximaOperacao={this.state.limparVisor}
                        entradaDecimal={this.state.modoDeEntradaDecimal} 
                    />
                </form>

                <p align="center">
                    @douglasabnovato 
                </p>
            </div>
            
        )

    }

}