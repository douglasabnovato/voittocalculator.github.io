import React from "react";
import ReactDOM from "react-dom"; 

import "./App.css";

class App extends React.Component {
    render(){
      return (
        <div>
            <p>
                <h3 align="center">
                    Voitto Treinamentos<br />
                    Implemente as funcionalidades da calculadora utilizando React.js.
                </h3>
            </p>
            <form name="calculator">
                <input type="textfield" name="ans" value="" />
                <br />
                <input type="button" value="1"/>
                <input type="button" value="2"/>
                <input type="button" value="3"/>
                <input type="button" value="+"/>
                <br />
                <input type="button" value="4" />
                <input type="button" value="5"/>
                <input type="button" value="6" />
                <input type="button" value="-"/>
                <br />
                <input type="button" value="7" />
                <input type="button" value="8" />
                <input type="button" value="9"/>
                <input type="button" value="*" />
                <br />
                <input type="button" value="0"/>
                <input type="reset" value="c"/>
                <input type="button" value="/"/>
                <input type="button" value="="/>
            </form>
        </div>
      );
    }
  }

  export default App;