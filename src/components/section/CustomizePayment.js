import React from 'react';

const CustomizePayment = () => {
  return (
    <div className="lg:mb-3 w-full  lg:h-[550px] flex flex-col justify-between">
      <article className="h-[350px]"></article>

      <article className="mt-6 lg:mt-0">
        <div className="text-center">
          <h2 className="text-dark-blue-1 text-xl font-bold">
            Customize a payment plan for your dream trip
          </h2>

          <p className="text-lg text-gray-2 mt-2">
            Choose a payment frequency that works for you to make your dream
            trip happen. You can pay in installments before the departure date
            is close.
          </p>
        </div>
      </article>
    </div>
  );
};

export default CustomizePayment;
