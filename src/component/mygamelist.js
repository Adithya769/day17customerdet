import React from "react";
import './game.css';
// import Board from "./board";
import Myboard from "./Temperature/myboard";


class Gamelist extends React.Component{
    constructor(props){
        super(props);
        this.state={
            history:[
                {
                    squares:Array(16).fill(null)
                }],
                stepNumber:0,
                xlsNext:true
        };
    }
    handleClick(i){
        const history= this.state.history.slice(0,this.state.stepNumber+1);
        const current = history[history.length-1];
        const squares = current.squares.slice();
        if(calculateWinner(squares)|| squares[i]){
            return;
        }
        squares[i]= this.state.xlsNext ? "X":"O";
        this.setState({
            history:history.concat([
               {
                    squares:squares
               }
            ]),
            stepNumber:history.length,
            xlsNext:!this.state.xlsNext
        });
    }
    jumpTo(step){
        this.setState({
            stepNumber:step,
            xlsNext:(step % 2) === 0
        });
    }
    render(){
        const history = this.state.history;
        const current= history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step,move)=>{
            const desc = move?
            'Go to move #'+ move:
            'Go to game start';
            return(
                <li key={move}>
                    <button onClick ={()=> this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });
        let status;
        if (winner){
            status= "Winner:"+winner;
        }else{
            status= "Next player:"+(this.state.xlsNext ? "X":"O");
        }
        return(
            <div className ="game">
                
                <div className = "game-board">
                {/* <input value={} onChange={this.handleChange} /> */}
                    <Myboard squares={current.squares} onClick={i => this.handleClick(i)}/>
                </div>
                <div className ="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}
function calculateWinner(squares){
    const lines =[
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15],
        [1,5,9,13],
        [2,6,10,14],
        [0,4,8,12],
        [3,7,11,15],
        [0,5,10,15],
        [3,6,9,12]
    ];
    for(let i=0;i<lines.length;i++){
        const [a,b,c,d]= lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c] && squares[b] === squares[d]){
            return squares[a];
        }
    }
    return null;
}
export default Gamelist;