import React, { lazy, Suspense, useTransition } from 'react';
import './App.css';
import Home from './components/home/Home';
import { Routes, Route, useRoutes, Navigate } from 'react-router-dom';
import { Sidebar } from './components/sidebar/Sidebar';
// import { Users } from './components/users/Users';
// import { User } from './components/user/User';
import { NotFound } from './components/notFound/NotFound';
import { UserDetails } from './components/userDetails/UserDetails';
import { Login } from './components/login/Login';
import { ProtectedRoute } from './components/protectedRoute/ProtectedRoute';
import { useState } from 'react';

const simulate = (time: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
};

const Dashboard = lazy(() => simulate(2000).then(() => import('./components/dashboard/Dashboard')));

const Users = lazy(() => import('./components/users/Users'));
const User = lazy(() => import('./components/user/User'));

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


  const renderLoader = () => <p>Loading</p>;



  const [isPending, startTransition] = useTransition();

  //Forma 1 Utilizando routes y las rutas definidas dentro de este
  return (
    <>

      <Sidebar />

      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Suspense fallback={renderLoader()}>
              <Dashboard />
            </Suspense>
          </ProtectedRoute>
        } />
        <Route path='/users' element={
          <Suspense fallback={renderLoader()}>
            <Users />
          </Suspense>
        } />
        <Route path='/user/:usr' element={

          <Suspense fallback={renderLoader()}>
            <User />
          </Suspense>

        } >
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
