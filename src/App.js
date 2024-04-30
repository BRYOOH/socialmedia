import './App.css';
import Login from './pages/login/Login'
import Register from './pages/register/Register';
import { createBrowserRouter,RouterProvider, Route } from 'react-router-dom';
import Navbar from './component/navbar/Navbar'
import Leftbar from './component/leftbar/Leftbar'
import Rightbar from './component/rightbar/Rightbar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'


function App() {
    const Layout=()=>{
      return (
        <div>
          <Navbar/>
          <div style={{display: "flex"}}>
            <Leftbar/>
            <Rightbar/>
          </div>
        </div>
      )
    }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>,
        },
        {
          path:'/profile/:id',
          element:<Profile/>,
        },
      ],
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/register',
      element:<Register/>
    }
  ]);

  return (
      <div>
        <RouterProvider router={router}/>  
      </div>    
    
  );
}

export default App;
