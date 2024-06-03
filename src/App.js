import './styles.scss';
import Login from './pages/login/Login'
import Register from './pages/register/Register';
import { createBrowserRouter,RouterProvider, Route, Navigate } from 'react-router-dom';
import Navbar from './component/navbar/Navbar'
import Leftbar from './component/leftbar/Leftbar'
import Rightbar from './component/rightbar/Rightbar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import { useContext } from 'react';
import { AuthContext } from './component/context/AuthContext';


function App() {

  const {currentUser}= useContext(AuthContext);

    const Layout=()=>{
      return (
          <div className='theme-light'>
          <Navbar/>
          <div style={{display: "flex"}}>
            <Leftbar/>
            <Home/>
            <Rightbar/>
          </div>
        </div>
      )
    };

  const ProtectedRoute=({children})=>{
    if(!currentUser){
      return <Navigate to='/login'/>
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
      <ProtectedRoute> 
        <Layout/>
      </ProtectedRoute>),
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
  
  )
}

export default App;
