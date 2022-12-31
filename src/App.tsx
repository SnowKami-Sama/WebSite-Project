import React from 'react';
import logo from './img/kami.png';
import './App.css';
import { Outlet, createBrowserRouter, RouterProvider, Route, NavLink } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Projects from './Pages/Projects';
import Time from './Pages/ProjectsList/TimeDate'

const Root = () => {
    return (
        <div>
            <div className='bg bg3'></div>
            <div>
               <header>
               <nav>
               <img src={logo} alt="" className='logo' />
               <ul>
                    <li><NavLink to="Home" >Home</NavLink></li>
                    <li><NavLink  to="About">About</NavLink></li>
                    <li><NavLink  to="Projects">Projects</NavLink></li>
                </ul>
               </nav>
               </header>
            </div>
            <div className='bg'></div>
            <div>
                <Outlet/>
            </div>
            <div className='bg bg2'></div>
            <footer className='footer'>
                Kami© 2022-2023
            </footer>
        </div>
    );
}

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Root/>,
            children: [
                {
                    path: "Home",
                    element: <Home/>
                },
                {
                    path: "About",
                    element: <About/>
                },
                {
                    path: "Projects",
                    element: <Projects/>
                }
            ]
        }
    ]);

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}
export default App;