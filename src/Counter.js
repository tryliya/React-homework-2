import React from 'react';
import { Button } from './Button.js'

class Counter extends React.Component {
    state = {
        number: 0,
    }

    onClickPlus = () => {
        this.setState({number: this.state.number + 1})
    }
    onClickMinus = () => {
        this.setState({number: this.state.number - 1})
    }

    render () {
        return (
            <div className="wrap">
                <Button label="+" onClick={this.onClickPlus}/>
                {this.state.number}
                <Button label="-" onClick={this.onClickMinus}/>
            </div>
        )
    }
}

export default Counter;