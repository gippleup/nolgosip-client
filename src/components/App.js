import React from 'react';
import '../style/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false
    };
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    logged: state.logged
  };
};

export default connect(mapStateToProps)(App);
