import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import { I18nextProvider } from 'react-i18next';
import Service from './components/service/service.jsx';







let routers = createBrowserRouter([
  { path:'/',element:<Layout/> , children:[
    {index:true,element:<Home/>},
    {path:'about' , element:<About/>},
    {path:'contact' , element:<Contact/>},
    {path:'service' , element:<Service/>},
  ]}
])










const App = () => {
  return (
    <I18nextProvider>
      <RouterProvider router={routers}/>
    </I18nextProvider>
  );
};

export default App;
