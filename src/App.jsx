import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';







let routers = createBrowserRouter([
  { path:'/',element:<Layout/> , children:[
    {index:true,element:<Home/>},
    {path:'about' , element:<About/>},
    {path:'contact' , element:<Contact/>},
  ]}
])










const App = () => {
  return (
    <RouterProvider router={routers}/>
  );
};

export default App;
