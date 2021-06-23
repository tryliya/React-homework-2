class Buttons extends React.Component {
    state = {
        button: 'repeat all'
    }

    changeButton = (button) => {
        switch (button) {
            case 'repeat all':
                this.setState({ button: 'no repeat' });
                break;
            case 'no repeat':
                this.setState({ button: 'repeat one' });
                break;
            case 'repeat one':
                this.setState({ button: 'repeat all' });
                break;
        }
    }
    render() {
        return (
            <button onClick={() => this.changeButton(this.state.button)}>{this.state.button}</button>
        )
    }
}
export default Buttons;