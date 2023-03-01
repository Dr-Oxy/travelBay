import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/index';

import ResetPassword from './pages/ResetPassword';
import Password from './pages/ResetPassword/Password';
import Otp from './pages/ResetPassword/Otp';
import CreatePassword from './pages/ResetPassword/CreatePassword';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://travelbay-9vyj.onrender.com/graphql',
  });

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
    </ApolloProvider>
  );
}

export default App;
