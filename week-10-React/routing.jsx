import React from "react";
import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";

function App() {
  return( <div>
    <BrowserRouter>
    
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/JEE" element={<JEECourses />} />
        <Route path="/JEE/online-class-11" element={<Class11Program />} />
        <Route path="/JEE/online-class-12" element={<Class12Program />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
      </Routes>
      
    </BrowserRouter>
  </div>
  )
}

function Layout() {
  return(
    <div style={{height: "100vh", background:"#6c5ce7" }}>
        <Header />
      <div style={{height: "90vh", background: "#a29bfe"}}>
        <Outlet />
      </div>
      Thanks for Visiting! <br></br>
      Contact us | Details
    </div>
  )
}
function Header(){
  return(
    <div>
    <Link to="/">Home</Link> |
    <Link to="/JEE/online-class-11"> Class 11</Link> |
    <Link to="/JEE/online-class-12"> Class 12</Link> |
    </div>
  )
}
function ErrorPage(){
  return(
    <div>
      Sorry No Page found!!
    </div>
  )
}

function HomePage(){
  return(
    <div>
      Welcome to Allen Coaching
    </div>
  )
}
function JEECourses(){
  return(
    <div>
      All JEE Courses 
    </div>
  )
}
function Class11Program(){
  return(
    <div>
      Welcome to Class 11 JEE Program
    </div>
  )
}
function Class12Program(){
  const Navigate = useNavigate();

  function redirect(){
    Navigate("/")
  }
  return(
    <div>
      Welcome to Class 12 JEE Program <br></br>
      <button onClick={redirect}>Go Back to the Home Page</button>
    </div>
  )
}

export default App;
