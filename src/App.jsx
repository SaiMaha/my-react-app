import Navbar from "./components/Navbar";
import { RouterProvider } from 'react-router-dom'
import { routes } from './Routes/AppRoutes'

function App() {
    return (
      <div>
        <RouterProvider router={routes}/>
      </div>
    );
  }
  
  export default App;
  