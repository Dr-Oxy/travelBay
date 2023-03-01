import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Onboarding } from '../../components/section';

import OtpInput from 'react-otp-input';
import { undoBlueIcon } from '../../assets/icons';

const Otp = () => {
  const navigate = useNavigate();

  const [OTP, setOTP] = useState('');
  const [seconds, setSeconds] = useState(60);

  const formattedSeconds = seconds <= 9 ? `0${seconds}` : seconds;

  useEffect(() => {
    const timer =
      seconds > 0 && setInterval(() => setSeconds(seconds - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  useEffect(() => {
    if (OTP.length === 6) {
      navigate('/reset-password/create-password');
    }
  }, [OTP.length, navigate]);

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
            Confirm OTP
          </h1>

          <p className="text-base mt-2">
            A 6-digit confirmation code was sent to your email address please
            enter below
          </p>

          <div className="my-5">
            <OtpInput
              value={OTP}
              onChange={(OTP) => setOTP(OTP)}
              numInputs={6}
              inputStyle="otp_alt_style"
              containerStyle="otp_input"
              focusStyle="otp_style_focus "
              errorStyle="border border-red-400"
            />
          </div>

          <div className="text-lg text-gray-2 flex flex-wrap items-center justify-center mb-6">
            <p>OTP will expire in 0:{formattedSeconds}</p>
            <div className="ml-2 cursor-pointer font-medium text-primary-blue">
              Resend O.T.P
            </div>
          </div>

          <Link to="/login">
            <div className="flex items-center justify-center">
              <img src={undoBlueIcon} alt="go back to login icon" />

              <span
                className="ml-5 text-primary-blue font-medium text-lg
            "
              >
                Return to Log in
              </span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Otp;
