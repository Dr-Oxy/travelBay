import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { useMutation, gql } from '@apollo/client';

import { Checkbox, Button, PasswordInput } from '../components/element';
import { Onboarding } from '../components/section';
import { googleIcon } from '../assets/icons';

const REGISTER_USERS_MUTATION = gql`
  mutation RegisterUser(
    $firstName: String!
    $lastName: String!
    $email: Email!
    $password: String!
    $phoneNumber: String!
  ) {
    register(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      phoneNumber: $phoneNumber
    ) {
      ... on UserRegisterResultSuccess {
        token
      }
      ... on BadRequest {
        message
      }
    }
  }
`;

const Register = () => {
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState(false);
  const [subscribe, setSubscribe] = useState(false);
  const [accept, setAccept] = useState(true);

  const [registerUser, { data, error, loading }] = useMutation(
    REGISTER_USERS_MUTATION,
  );

  const signUp = handleSubmit(async (data) => {
    registerUser({
      variables: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        phoneNumber: data.phoneNumber,
      },
    });

    if (data?.register?.__typeName === 'UserRegisterResultSuccess') {
      reset();
      navigate('/login');
    }

    if (error) {
      console.log(error);
    }
  });

  console.log({ data, error });

  return (
    <div className="lg:h-screen bg-white text-dark-blue-1 text-base grid grid-cols-1 lg:grid-cols-2">
      <Onboarding />

      <section className="bg-white py-10 px-6 lg:px-10 overflow-y-scroll">
        <Link to="/login">
          <span className="block text-base font-bold text-right cursor-pointer">
            Sign in
          </span>
        </Link>

        <div className="my-8">
          <h1 className="text-[32px] text-dark-blue-2 font-bold">
            Let’s get started
          </h1>

          <p className="text-base mt-2">
            Create an account and enjoy a seamless travel booking experience.
          </p>
        </div>

        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="block mb-3 text-sm font-medium text-dark-2 capitalize">
                first name
              </label>
              <div>
                <input
                  name="firstName"
                  className="w-full text-gray-1 border border-stroke-black
                   focus:outline-primary-blue
                  rounded-lg text-base  py-3 px-2"
                  {...register('firstName', {
                    required: true,
                  })}
                  type="text"
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <div className="text-red-400 text-sm">
                    First name cannot be empty
                  </div>
                )}
              </div>
            </div>
            <div className="col-span-1">
              <label className="block mb-3 text-sm font-medium text-dark-2 capitalize">
                last name
              </label>
              <div>
                <input
                  name="lastName"
                  className="w-full text-gray-1 border border-stroke-black
                   focus:outline-primary-blue
                  rounded-lg text-base  py-3 px-2"
                  {...register('lastName', {
                    required: true,
                  })}
                  type="text"
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <div className="text-red-400 text-sm">
                    Last name cannot be empty
                  </div>
                )}
              </div>
            </div>
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
            <div className="col-span-1 lg:col-span-2">
              <label className="block mb-3 text-sm font-medium text-dark-2 capitalize">
                Phone number
              </label>
              <div>
                <input
                  name="phoneNumber"
                  className="w-full text-gray-1 border border-stroke-black
                   focus:outline-primary-blue
                  rounded-lg text-base  py-3 px-2"
                  {...register('phoneNumber', {
                    required: true,
                    pattern: /^[0-9]*$/,
                  })}
                  type="text"
                  placeholder="Enter your phone number"
                />
                {errors.phoneNumber && (
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

          <div className="flex items-start my-4">
            <Checkbox
              checked={accept}
              value={accept}
              onChange={() => setAccept(!accept)}
              name="accept"
            />

            <div className="flex-1 ml-2 text-base text-dark-blue-1">
              <p>
                {' '}
                I have read and agree to Travelbay’s{' '}
                <span className="text-primary-blue underline">
                  Terms of Service
                </span>{' '}
                and{' '}
                <span className="text-primary-blue underline">
                  Privacy Policy
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-start mb-8">
            <Checkbox
              checked={subscribe}
              value={subscribe}
              onChange={() => setSubscribe(!subscribe)}
              name="subscribe"
            />

            <span className="text-sm flex-1 ml-2">
              Join Travelbay travel community for exclusive access to travel
              resources and events to help you grow.
            </span>
          </div>

          <div className="text-center">
            <Button
              onClick={signUp}
              text={loading ? 'Creating..' : 'Create an account'}
            />

            <span className="text-base text-gray-1 font-medium my-3 block">
              OR
            </span>

            <Button
              icon={googleIcon}
              iconHeight={24}
              iconWidth={24}
              iconAlt="google sign in icon"
              customStyles="bg-white text-gray-1 text-base font-bold rounded-lg border border-black py-3 px-4 w-full"
              text="Continue with Google"
            />
          </div>

          <div className=" font-medium text-base text-gray-1 mt-6 text-center">
            <span>Having problems creating and account? </span>
            <span className="text-dark-blue-1 underline">Chat with us</span>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;
