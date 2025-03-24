import { createBrowserRouter} from "react-router-dom"
import Home from './../components/Home';
import Services from './../components/Services';
import About from './../components/About';
import Contact from "../components/Contact";
export let routes=createBrowserRouter([{path:"/",element:<Home/>},
    {path:"/services", element:<Services/>},{path:"/about", element:<About/>},{path:"/contact", element:<Contact/>}
])