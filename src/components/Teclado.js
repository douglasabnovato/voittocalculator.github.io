import React from 'react';

import Botao from './Botao';


export default class Teclado extends React.Component{
    
    render(){
        
        return(                                      
            <div>
                <br />
                <Botao type="reset" value="c"/>
                <Botao type="button" value="+/-"/>
                <Botao type="button" value="%"/>
                <Botao type="button" value="/"/>
                <br />
                <Botao type="button" value="1"/>
                <Botao type="button" value="2"/>
                <Botao type="button" value="3"/>
                <Botao type="button" value="+"/>
                <br />
                <Botao type="button" value="4" />
                <Botao type="button" value="5"/>
                <Botao type="button" value="6" />
                <Botao type="button" value="-"/>
                <br />
                <Botao type="button" value="7" />
                <Botao type="button" value="8" />
                <Botao type="button" value="9"/>
                <Botao type="button" value="*" />
                <br />
                <Botao type="button" value="0"/>
                <Botao type="button" value="."/>
                <Botao type="button" value="pi"/>
                <Botao type="button" value="="/>
            </div>
        )

    }
    
}