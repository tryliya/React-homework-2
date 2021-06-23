import React from 'react';

class Checkbox extends React.Component {
    state = {
        checked: 'x',
    }

    onCheckboxClick  = () => {
        
        this.setState({checked: this.state.checked === 'x' ? 'v' : 'x'});       
        
    }

    render(){
        return (
        <div>
            <div onClick={this.onCheckboxClick}>{this.state.checked}</div>
        </div>
        )
    }
}



export default Checkbox;