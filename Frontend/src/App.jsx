import React from "react"
import Home from "./Home/Home"
import { Route, Routes } from "react-router-dom"
import Courses from "./Courses/Courses";
import SignUp from "./components/SignUp"


function App() {

  return (

<div className='dark:bg-slate-900 dark:text-white '>
<Routes>

<Route path="/" element={<Home />}></Route>
<Route path="/Course" element={<Courses />}></Route>
<Route path="/SignUp" element={<SignUp />}></Route>

</Routes>
</div>
    
  );
}
export default App;
