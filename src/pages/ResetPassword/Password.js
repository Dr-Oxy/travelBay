import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Button, RouteLink } from '../../components/element';
import { Onboarding } from '../../components/section';

import routes from '../../router/routes';

const Password = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="lg:h-screen bg-white text-dark-blue-1 text-base grid grid-cols-1 lg:grid-cols-2">
      <Onboarding />

      <section className="bg-white py-10 px-6 lg:px-10">
        <RouteLink link="/register" title="Create an account" />

        <div className="mt-14 mb-4">
          <h1 className="text-[32px] text-dark-blue-2 font-bold">
            Reset your password
          </h1>

          <p className="text-base mt-2">
            Please enter the email address associated with your account. We will
            send you an email with instructions on how to recover your password.
          </p>
        </div>

        <form>
          <div>
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

          <Link to={routes.RESET_PASSWORD_OTP}>
            <div className="mt-8">
              <Button text="Continue" />
            </div>
          </Link>
        </form>

        <Link to={routes.LOGIN}>
          <div className="text-base font-bold text-primary-blue text-center mt-4">
            Return to login
          </div>
        </Link>
      </section>
    </div>
  );
};

export default Password;
