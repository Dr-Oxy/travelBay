import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import { Button, PasswordInput } from '../components/element';
import { Onboarding } from '../components/section';

const Login = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState(false);

  return (
    <div className="lg:h-screen bg-white text-dark-blue-1 text-base grid grid-cols-1 lg:grid-cols-2">
      <Onboarding />

      <section className="bg-white py-10 px-6 lg:px-10">
        <Link to="/register">
          <span className="block text-base font-bold text-right cursor-pointer">
            Create an account
          </span>
        </Link>

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
                  rounded-lg text-base  py-3 px-2"
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
                      type={show ? 'text' : 'password'}
                      show={show}
                      setShow={setShow}
                      placeholder="Password (min of 8 characters)"
                      {...field}
                    />
                  )}
                />

                {errors.password && (
                  <div className="text-red-400 text-sm">
                    Password field cannot be empty
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button text="Log in" />
          </div>
        </form>

        <div className="text-base text-gray-1 mt-4 mb-8 text-center">
          <span>Forgot your password? </span>
          <Link to="/reset-password/password">
            <span className="text-dark-blue-1 underline">Reset here</span>
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
