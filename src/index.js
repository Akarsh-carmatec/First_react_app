import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={()=>{this.props.xval(this.props.index_item)}}>
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  
  constructor(props){
  	super(props);
  	this.state = {
  		isNext : true,
  	};
  }

  handleClick = (i) => {
  	 this.setState({
  	 	isNext : !this.state.isNext
  	 });
  }

  renderSquare = (i) => {
    return (<Square 
    	value={this.state.isNext ? 'X' : 'O'} xval={this.handleClick}
    	index_item={i}
    />);
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component{
	render(){
		return(
			<div className="game">
			<div className="game-board">
			  <Board />
			</div>
			<div className="game-info">
			  <div>{/* status */}</div>
			  <ol>{/* TODO */}</ol>
			</div>
			</div>
		);
	}
}

ReactDOM.render(
	<Game />,
	document.getElementById("root")
)