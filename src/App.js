import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import Joke from './components/Joke';


class App extends React.Component{

  render() {
    return(
      <div className="container-fluid">
       

       <Joke />
      </div>
    );
  }
}
export default App;
