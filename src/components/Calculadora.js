import React from 'react';

import Teclado from './Teclado';
import Visor from './Visor';

import { calculadoraStore } from '../flux/CalculadoraStore';

/**
 * Componente Calculadora que renderiza dois outros componentes:
 * Visor : local de inserir e visualizar resultados de cálculos
 * Teclado : determina as variáveis manipuladas nos cálculos
 */

export default class Calculadora extends React.Component{
    
    /**
     * setando um estado inicial
     * passamos os valores do estado via props
     */
    constructor(props){
        super(props)
        this.state = calculadoraStore.getState()
    }

    /**
     * O método  componentWillMount() faz parte do ciclo de vida 
     * dos componentes react e é invocado apenas uma vez antes 
     * da primeira renderização do componente
     */
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
                    {/*a forma como passamos valor para o componente visor*/}
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