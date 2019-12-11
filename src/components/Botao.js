import React from 'react';

export default class Botao extends React.Component{
    
    render(){
        
        return (
            <input type={this.props.type} value={this.props.value}/>
        )
    }
}