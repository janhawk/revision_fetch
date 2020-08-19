import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'


class Joke extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
        isLoading: false,
        errorMessage: null,
        joke: []
    };
}
componentDidMount() {
    const url ="https://official-joke-api.appspot.com/jokes/random";
    fetch(url)
    .then(res => res.json())
    .then(json => {
        console.log(json);
        // code
        this.setState({
          isLoading: true,
          errorMessage: json,
          joke: json,
        })
      });
    }
  

  render() {
      var { isLoading, joke } = this.state;
      if (!isLoading) {
          return <div className="container-fluid"> 
                  <div className="row justify-content-md-center">
                    <div className="col-4">
                      Loading...
                      <div className="progress animated" style={{height: "25px"}}>
                        <div className="progress-bar progress-bar-striped progress-bar-animated">
                          <div className="progress-bar " role="progressbar" style={{width: "20%"}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">25%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  
                
      }
      else {
        return(
        <div className="container-fluid"> 
          <div className="row justify-content-md-center">
            <div className="col-8 col-md-3">
              <div className="card" styles="width: 18rem;">
                {/* Loaded */}
                
                  <h2 className="card-header">{this.state.joke.type}</h2>
                  <div className="card-body">
                  <h5 className="card-title">{this.state.joke.setup}</h5>
                  <p className="card-text">{this.state.joke.punchline}</p>
                </div> 
              </div>
            </div>
          </div>
        </div>
    );
    }
  }
}
export default Joke;