import React from 'react';

class App extends React.Component {
  state = {
    isSignedIn: false,
  }

  signIn = () => {
    setTimeout(() => {
      this.setState({isSignedIn: true})
    }, 3000)
  }

  render(){
    return (
    <div>
      {this.state.isSignedIn ? (
        <div>Hello user</div>
      ) : (
        <div className='button' onClick={this.signIn}>Sign in</div>
      )}
    </div>
  );
  }
}



export default App;
