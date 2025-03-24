import { createBrowserRouter} from "react-router-dom"
import Home from './../components/Home';
import Services from './../components/Services';
import About from './../components/About';
import Contact from "../components/Contact";
import Layout from "../components/Layout";
import { Children } from "react";
import Profile from "../components/Profile/Profile";
export let routes=createBrowserRouter([
    {path:"/", element:<Layout/>,
        children: [
            {path:"/", element:<Home/>},
            {path:"/services", element:<Services/>},
            {path:"/about", element:<About/>},
            {path:"/contact", element:<Contact/>},
            {path:"/profile",element:<Profile/>}
        ],
    },
])
