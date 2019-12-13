import React from 'react';

import Botao from './Botao';

/**
 * Componente Teclado que renderiza todos os botões
 * Botao : componente que chama as actions conforme seu tipo e sua função
 */

export default class Teclado extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        
        return( 
            
            <div id="keyboard">

                <br />
                <Botao type="reset" value="C" 
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior}
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal}
                />
                <Botao type="button" value="+/-"
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal} 
                />
                <Botao type="button" value="%"
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal} 
                />
                <Botao type="button" value="/"
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal} 
                />
                <br />
                <Botao type="button" value="1"
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal} 
                />
                <Botao type="button" value="2"
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal}
                />
                <Botao type="button" value="3"
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal}
                />
                <Botao type="button" value="+"
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal}
                />
                <br />
                <Botao type="button" value="4"
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal}
                />
                <Botao type="button" value="5"
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal}
                />
                <Botao type="button" value="6"
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal}
                />
                <Botao type="button" value="-"
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal}
                />
                <br />
                <Botao type="button" value="7"
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal}
                />
                <Botao type="button" value="8"
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal}
                />
                <Botao type="button" value="9"
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal}
                />
                <Botao type="button" value="*"
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal}
                />
                <br />
                <Botao type="button" value="0"
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal}
                />
                <Botao type="button" value="."
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal}
                />
                <Botao type="button" value="pi"
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal}
                />
                <Botao type="button" value="="
                    valorNaMemoria={this.props.valorNaMemoria} 
                    operacaoAnterior={this.props.operacaoAnterior} 
                    valorVisor={this.props.valorVisor} 
                    limparNaProximaOperacao={this.props.limparNaProximaOperacao}
                    entradaDecimal={this.props.entradaDecimal}
                />

            </div>
        )
    }
    
}