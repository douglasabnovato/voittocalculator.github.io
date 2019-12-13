import React from 'react';

/**
 * Componente Visor que renderiza um input do tipo textfield,
 * exibindo valor no display
 */

export default class Visor extends React.Component{
    
    render(){

        return (
        
            <input type={this.props.type} value={this.props.value}/>
            
        )

    }
    
}