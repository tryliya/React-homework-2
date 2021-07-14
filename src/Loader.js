import React from 'react';
import './index.css';

class Loader extends React.Component {
    state = {
        loading: false,
        greeting: ''
    }

    showLoading = () => {

        setTimeout(() => {
            this.sayHi()
        }, 3000)

        this.setState({ loading: true })
    }

    sayHi = () => {
        this.setState({ greeting: 'Hello my Lord!!!', loading: false })
    }

    render() {
        return (
            <div>
                <div onClick={ this.showLoading } className='button'>Say Hi</div>
                {this.state.loading && (
                    <div className='loader' />
                )}
                {this.state.greeting && (
                    <span>{this.state.greeting}</span>
                )}
            </div>
        )
    }
}

export default Loader