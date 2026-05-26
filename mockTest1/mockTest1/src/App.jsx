import React from "react";
import "./App.css";
function App(){
  return(
    <div class="box">
      <h1>Student Registration Form</h1>
      <input type="text" placeholder="Student Name" /><br />
      <input type="email" placeholder="Email" /><br />
      <input type="password" placeholder="Password" /><br />
      <input type="tel" name="phone" id="phone" placeholder="Phone Number" />
     <input type="text" placeholder="Course" /><br />
    </div>
  )
}

export default App;
