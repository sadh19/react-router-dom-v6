import './App.css';
import Home from './components/home/Home';
import { Routes, Route, useRoutes, Navigate } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import { Sidebar } from './components/sidebar/Sidebar';
import { Users } from './components/users/Users';
import { User } from './components/user/User';
import { NotFound } from './components/notFound/NotFound';
import { UserDetails } from './components/userDetails/UserDetails';
import { Login } from './components/login/Login';
import { ProtectedRoute } from './components/protectedRoute/ProtectedRoute';
import { useState } from 'react';

function App() {



  const routes = [
    { path: "/", element: <Home /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/users", element: <Users /> },
    {
      path: "/user/:usr", element: <User />, children: [
        { path: 'details', element: <UserDetails /> }
      ]
    },
    { path: "*", element: <NotFound /> },
  ];



  //Forma 1 Utilizando routes y las rutas definidas dentro de este
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path='/users' element={<Users />} />
        <Route path='/user/:usr' element={<User />} >
          <Route path='details' element={<UserDetails />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );

  //Forma 2 Utilizando el hook useRoutes y definiendo un arreglo de rutas
  // let element = useRoutes(routes);

  // return (<>
  //   <div className='home-span'>
  //     <Sidebar />
  //   </div>
  //   {element}
  // </>);

}

export default App;
