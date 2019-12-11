import React from 'react';

export default class Visor extends React.Component{
    
    render(){

        return (
            <input type={this.props.type} name="ans" value={this.props.value}/>
        )

    }
    
}