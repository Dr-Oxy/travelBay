import { BrowserRouter, Routes, Route } from 'react-router-dom';

import routes from './routes';

import Login from '../pages/Login';
import Register from '../pages/Register';
import ResetPassword from '../pages/ResetPassword';
import Password from '../pages/ResetPassword/Password';
import Otp from '../pages/ResetPassword/Otp';
import CreatePassword from '../pages/ResetPassword/CreatePassword';
import Home from '../pages';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route path={routes.REGISTER} element={<Register />} />
        <Route path={routes.LOGIN} element={<Login />} />
        <Route path={routes.RESET} element={<ResetPassword />}>
          <Route path={routes.RESET_PASSWORD} element={<Password />} />
          <Route path={routes.RESET_PASSWORD_OTP} element={<Otp />} />
          <Route path={routes.CREATE_PASSWORD} element={<CreatePassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
