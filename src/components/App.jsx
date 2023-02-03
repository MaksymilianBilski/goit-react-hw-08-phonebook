import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from 'redux/auth/authOperation';
import { useEffect } from 'react';
import { Layout } from './Layout';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Home from 'pages/Home';
import Tasks from 'pages/Tasks';
import { useAuth } from 'hooks';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b> Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Login />} />
          }
        />
        <Route
          path="/phonebook"
          element={<PrivateRoute redirectTo="/login" component={<Tasks />} />}
        />
      </Route>
    </Routes>
  );
};
