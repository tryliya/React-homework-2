import React from 'react';
import './index.css';

class TextItalic extends React.Component {
    state = {
        italic: false
    }

    changeText = () => {
        this.setState({italic: !this.state.italic})
    }
    render() {
        return (
            <p className={this.state.italic && 'text' } onClick={this.changeText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        )
    }
}
export default TextItalic;