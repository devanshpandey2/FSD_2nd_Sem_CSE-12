// function App(){
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
//       <p>This is my first React app.</p>
//       <CSE12 />
//     </div>
//   );
// }

// // second component
// function CSE12(){
//   return (
//     <div className="CSE12">
//       <h1>Welcome to CSE 12</h1>
//       <p>This is a second component.</p>
//     </div>
//   );
// }

// export default App;
// export default CSE12;

import Student from "./student";

function App() {
  return (
    <div className="App" >
      <h1>Student Information</h1>
      <Student name="Devansh Pandey" course="CSE 12" marks={95} />
      <Student name="John Doe" course="CSE 12" marks={88} />
      <Student name="Jane Smith" course="CSE 12" marks={92} />
    </div>
  );
}

export default App;