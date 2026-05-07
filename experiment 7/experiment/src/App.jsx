import  StudentCard  from "./StudentCard.jsx";
function App() {
  return (
    <div>
      <h1>Student Information Card</h1>
      <StudentCard name="Devansh Pandey" marks={95} grade="A" />
      <StudentCard name="John Doe" marks={85} grade="B" />  
      <StudentCard name="Jane Smith" marks={78} grade="C" />

    </div>
  );
}

export default App;

// import React from 'react';
// import { useState } from 'react';
// function App() {
//   const{isOn,setIsOn}=useState(false);
//   return (

//     <div style ={{textAlign:"center" ,marginTop:"50px"}}>
//       <h1>Toggle Button</h1>
//       <button onClick={()=>setIsOn(!isOn)}>{isOn?"ON":"OFF"}</button>
//     </div>
//   );
// }

// export default App;


