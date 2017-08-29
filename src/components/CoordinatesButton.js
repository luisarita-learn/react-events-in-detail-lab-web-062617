import React from 'react';
import ReactDOM from 'react-dom';

export default class CoordinatesButton extends React.Component {

    constructor(props){
        super()

        this.props = props
    }
    
    handleClick = (event) => {
        let coordinates = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }
    
     render() {
       return (
         <button onClick={this.handleClick}>Click me!</button>
       );
     }
   }