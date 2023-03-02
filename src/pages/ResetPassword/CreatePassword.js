import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import { Button, PasswordInput } from '../../components/element';
import { Onboarding } from '../../components/section';

const CreatePassword = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createPassword = handleSubmit(async (data) => {
    navigate('/login');
  });

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
                <Controller
                  control={control}
                  name="newpassword"
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
                {errors.newpassword && (
                  <div className="text-red-400 text-sm">
                    Password field cannot be empty
                  </div>
                )}
              </div>
            </div>

            <div className=" relative mt-4">
              <label className="block mb-3 text-sm font-medium text-dark-2">
                Re-type new password
              </label>

              <div>
                <Controller
                  control={control}
                  name="confirmpassword"
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

                {errors.confirmpassword && (
                  <div className="text-red-400 text-sm">
                    Password field cannot be empty
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button onClick={createPassword} text="Confirm new password" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreatePassword;
