import React from 'react'

class CoordinatesButton extends React.Component {

    clickHandler = (event) => {
        let array = [event.clientX, event.clientY]

        this.props.onReceiveCoordinates(array)
    
    }


    render() {
        return <button onClick={this.clickHandler}>Click Me!</button>
    }
}

export default CoordinatesButton
