import React, { useContext } from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from '../views/home/Home'
import Login from '../views/auth/Login'
import Register from '../views/auth/Register'
import NotFound from '../components/ui/commons/NotFound'
import AuthContext from '../context/AuthContext'
import Events from '../views/events/Events'
import SingleEvent from '../views/singleEvent/SingleEvent'

export function Router() {

    const { token } = useContext(AuthContext);

    const isAuthenticated = token !== null && token !== undefined && token !== '';

    const ProtectedRoute = ({ element: Element, ...props }) => {
        return isAuthenticated ? (
            <Element {...props} />
        ) : (
            <Navigate to="/login" replace state={{ from: props.location }} />
        )
    }
    return (
        <HashRouter>
            <div className="text-text-color bg-base">

                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />

                    <Route path='/' element={<Home />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/events' element={<Events />} />
                    <Route path='/events/:id' element={<SingleEvent />} />

                    <Route path='*' element={<NotFound />} />
                </Routes>
            </div>
        </HashRouter>
    )
}
