import { WINS } from "../App";

export default function checkWinner (board){
  

    for(const combo of WINS){
      const [a, b, c] = combo
      if(
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
        ){
          return board[a]
        }
    }


    if(board.every(square => square !== null)){
      return 'Empate'
    }

}