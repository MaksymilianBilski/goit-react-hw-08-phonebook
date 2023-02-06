import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/authOperation';
import { useAuth } from 'hooks';

const Home = lazy(() => import('../pages/Home'));
const Register = lazy(() => import('../pages/Register'));
const Login = lazy(() => import('../pages/Login'));
const Tasks = lazy(() => import('../pages/Tasks'));

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
      <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/goit-react-hw-08-phonebook/register"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/phonebook"
              component={<Register />}
            />
          }
        />
        <Route
          path="/goit-react-hw-08-phonebook/login"
          element={
            <RestrictedRoute
              redirectTo="/goit-react-hw-08-phonebook/phonebook"
              component={<Login />}
            />
          }
        />
        <Route
          path="/goit-react-hw-08-phonebook/phonebook"
          element={
            <PrivateRoute
              redirectTo="/goit-react-hw-08-phonebook/login"
              component={<Tasks />}
            />
          }
        />
      </Route>
    </Routes>
  );
};
