import React from 'react';
import ReactDOM from 'react-dom';

export default class DelayedButton  extends React.Component {

    constructor(props){
        super()

        this.props = props
    }
    
    handleClick = (event) => {
        event.persist()
        setTimeout(function(){
            this.props.onDelayedClick(event)
        }.bind(this), this.props.delay)
    }
    
     render() {
       return (
         <button onClick={this.handleClick}>Click me!</button>
       );
     }
   }