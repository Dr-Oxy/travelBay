import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useForm, Controller } from 'react-hook-form';
import { useMutation, gql } from '@apollo/client';

import {
  Checkbox,
  Button,
  PasswordInput,
  SelectDropdown,
  RouteLink,
} from '../components/element';
import { Onboarding } from '../components/section';
import { googleIcon } from '../assets/icons';

import { toast } from 'react-toastify';

import countriesDailingCode from '../utils/countriesDialCode';

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

  const [subscribe, setSubscribe] = useState(false);
  const [accept, setAccept] = useState(true);

  const dialCodes = countriesDailingCode?.map((code) => ({
    value: code?.dialCode,
    label: code?.dialCode,
  }));

  const [registerUser, { loading }] = useMutation(REGISTER_USERS_MUTATION, {
    update(proxy, { data }) {
      if (data?.register?.message) {
        toast.error(data?.register?.message, {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      } else {
        sessionStorage.setItem('token', data?.register?.token);
        reset();
        navigate('/');
      }
    },
    onError(error) {
      toast.error(error?.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    },
  });

  const signUp = handleSubmit(async (data) => {
    if (!accept) {
      toast.error('You have to accept terms and conditions');
      return;
    }

    registerUser({
      variables: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        phoneNumber: data.dialCode?.value + data.phoneNumber,
      },
    });
  });

  return (
    <div className="lg:h-screen bg-white text-dark-blue-1 text-base grid grid-cols-1 lg:grid-cols-2">
      <Onboarding />

      <section className="bg-white py-10 px-6 lg:px-10 overflow-y-scroll">
        <RouteLink link="/login" title="Sign In" />

        <div className="my-8">
          <h1 className="text-[32px] text-dark-blue-2 font-bold">
            Let’s get started
          </h1>

          <p className="text-base mt-2">
            Create an account and enjoy a seamless travel booking experience.
          </p>
        </div>

        <form>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="col-span-1">
              <label className="block mb-3 text-sm font-medium text-dark-2 capitalize">
                first name
              </label>
              <div>
                <input
                  name="firstName"
                  className="w-full text-gray-1 border border-stroke-black
                   focus:outline-primary-blue
                  rounded-lg text-base  p-3"
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
                  rounded-lg text-base  p-3"
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

            <div className="col-span-1 xl:col-span-2">
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

            <div className="col-span-1 xl:col-span-2">
              <label className="block mb-3 text-sm font-medium text-dark-2 capitalize">
                Phone number
              </label>

              <div className="input-wrapper flex items-center border border-stroke-black rounded-lg focus-within:border-2 focus-within:border-primary-blue">
                <Controller
                  control={control}
                  name="dialCode"
                  rules={{
                    required: true,
                  }}
                  render={({ field }) => (
                    <SelectDropdown
                      defaultValue={dialCodes[0]}
                      options={dialCodes}
                      {...field}
                    />
                  )}
                />

                <input
                  name="phoneNumber"
                  className="text-gray-1 border  text-base  py-3 pr-3 ml-1"
                  {...register('phoneNumber', {
                    required: true,
                    pattern: /^[0-9]*$/,
                  })}
                  type="tel"
                />
              </div>

              {errors.phoneNumber && (
                <div className="text-red-400 text-sm">
                  Please enter a valid phone number
                </div>
              )}
            </div>

            <div className="col-span-1 xl:col-span-2 relative ">
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
