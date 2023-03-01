import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { Button } from '../../components/element';
import { Onboarding } from '../../components/section';

const CreatePassword = () => {
  const {
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
          <h1 className="text-[32px] leading-10  text-dark-blue-2 font-bold">
            Create a new password
          </h1>

          <p className="text-base mt-2">
            Enter a new password of your choice but please make sure it’s known
            to you alone.
          </p>
        </div>

        <form>
          <div className="">
            <div className=" relative ">
              <label className="block mb-3 text-sm font-medium text-dark-2 capitalize">
                New password
              </label>
              <div>
                <input
                  name="newpassword"
                  className="w-full text-gray-1 border border-stroke-black
                   focus:outline-primary-blue
                  rounded-lg text-base  py-3 px-2"
                  {...register('newpassword', {
                    required: true,
                  })}
                  type={show ? 'text' : 'password'}
                  placeholder="Password (min of 8 characters and a number)"
                />
                {errors.newpassword && (
                  <div className="text-red-400 text-sm">
                    Password field cannot be empty
                  </div>
                )}
                <span
                  onClick={() => setShow(!show)}
                  className="absolute top-12 right-4  cursor-pointer block uppercase text-base text-primary-blue"
                >
                  {show ? 'hide' : 'show'}
                </span>
              </div>
            </div>

            <div className=" relative mt-4">
              <label className="block mb-3 text-sm font-medium text-dark-2">
                Re-type new password
              </label>

              <div>
                <input
                  name="confirmpassword"
                  className="w-full text-gray-1 border border-stroke-black
                   focus:outline-primary-blue
                  rounded-lg text-base  py-3 px-2"
                  {...register('confirmpassword', {
                    required: true,
                  })}
                  type={show ? 'text' : 'password'}
                  placeholder="Password (min of 8 characters and a number)"
                />
                {errors.confirmpassword && (
                  <div className="text-red-400 text-sm">
                    Password field cannot be empty
                  </div>
                )}
                <span
                  onClick={() => setShow(!show)}
                  className="absolute top-12 right-4  cursor-pointer block uppercase text-base text-primary-blue"
                >
                  {show ? 'hide' : 'show'}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button text="Confirm new password" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreatePassword;
