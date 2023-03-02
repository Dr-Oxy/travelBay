import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/index';

import ResetPassword from './pages/ResetPassword';
import Password from './pages/ResetPassword/Password';
import Otp from './pages/ResetPassword/Otp';
import CreatePassword from './pages/ResetPassword/CreatePassword';

function App() {
  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_GRAPHQL_URI,
  });

  const authLink = setContext((_, { headers }) => {
    const token = sessionStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  // const client = new ApolloClient({
  //   cache: new InMemoryCache(),
  //   link: concat(authMiddleware, httpLink),
  // });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />}>
            <Route path="/reset-password/password" element={<Password />} />
            <Route path="/reset-password/otp" element={<Otp />} />
            <Route
              path="/reset-password/create-password"
              element={<CreatePassword />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </ApolloProvider>
  );
}

export default App;
