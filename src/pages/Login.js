import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useMutation, gql } from '@apollo/client';

import { Button, PasswordInput, RouteLink } from '../components/element';
import { Onboarding } from '../components/section';

import { toast } from 'react-toastify';

import routes from '../router/routes';

const LOGIN_USERS_MUTATION = gql`
  mutation LoginUser($loginEmail2: Email!, $loginPassword2: String!) {
    login(email: $loginEmail2, password: $loginPassword2) {
      ... on UserLoginResultSuccess {
        token
      }
      ... on BadRequest {
        message
      }
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loginUser, { loading }] = useMutation(LOGIN_USERS_MUTATION, {
    update(proxy, { data }) {
      if (data?.login?.message) {
        toast.error(data?.login?.message);
      } else {
        sessionStorage.setItem('token', data?.login?.token);
        reset();
        navigate('/');
      }
    },
    onError({ graphQLErrors }) {
      console(graphQLErrors);
    },
  });

  const onLogin = handleSubmit(async (data) => {
    loginUser({
      variables: {
        loginEmail2: data.email,
        loginPassword2: data.password,
      },
    });
  });

  return (
    <div className="lg:h-screen bg-white text-dark-blue-1 text-base grid grid-cols-1 lg:grid-cols-2">
      <Onboarding />

      <section className="bg-white py-10 px-6 lg:px-10">
        <RouteLink link="/register" title="Create an account" />

        <div className="mt-14 mb-4">
          <h1 className="text-[32px] text-dark-blue-2 font-bold">
            Welcome back
          </h1>

          <p className="text-base mt-2">Login your travelbay account</p>
        </div>

        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="col-span-1 lg:col-span-2">
              <label className="block mb-3 text-sm font-medium text-dark-2 capitalize">
                Email address
              </label>
              <div>
                <input
                  name="email"
                  className="w-full text-gray-1 border border-stroke-black
                   focus:outline-primary-blue
                  rounded-lg text-base  p-3"
                  {...register('email', {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                  type="email"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <div className="text-red-400 text-sm">
                    Email cannot be empty
                  </div>
                )}
              </div>
            </div>

            <div className="col-span-1 lg:col-span-2 relative ">
              <label className="block mb-3 text-sm font-medium text-dark-2 capitalize">
                password
              </label>
              <div>
                <Controller
                  control={control}
                  name="password"
                  rules={{
                    required: true,
                    minLength: 8,
                  }}
                  render={({ field }) => (
                    <PasswordInput
                      placeholder="Password (min of 8 characters)"
                      {...field}
                    />
                  )}
                />

                {errors.password && (
                  <div className="text-red-400 text-sm">
                    Password must have a min of 8 characters
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button onClick={onLogin} text={loading ? 'Loading..' : 'Log in'} />
          </div>
        </form>

        <div className="text-base text-gray-1 mt-4 mb-8 text-center">
          <span>Forgot your password? </span>
          <Link to={routes.RESET_PASSWORD}>
            <span className="text-dark-blue-1 underline">Reset it here</span>
          </Link>
        </div>

        <div className="text-base text-gray-1 text-center">
          <span>Having problems logging? </span>
          <span className="text-dark-blue-1 underline">Chat with us</span>
        </div>
      </section>
    </div>
  );
};

export default Login;
