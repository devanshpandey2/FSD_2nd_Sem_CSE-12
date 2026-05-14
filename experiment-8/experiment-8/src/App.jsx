// import { useState } from 'react'
// function GameScore() {
//   const [score, SetScore] = useState(0);
//   return (
//     <div>
//       <h1>Current Score: {score}</h1>
//       <button onClick={() => SetScore(score + 1)}>Score a Point</button>
//     </div>
//   );
// }

// export default GameScore;

import { useState } from 'react'
function App(){
  const [count, setCount] = useState(0);
// increment function
const increment = () => {
  setCount(count + 1);
}
// decrement function
const decrement = () => {
  setCount(count - 1);
}
return (
  <div style={{textAlign:"center",marginTop:"50px"}}>
    <h1>Counter: {count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement} style={{marginLeft:"10px"}}>Decrement</button>
  </div>
);

export default App; 

}
