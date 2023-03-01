import React, { useState } from 'react';

import { Button } from '../element';
import EmptyPackage from './EmptyPackage';
import { arrowDownDark, logo } from '../../assets/icons';

const Onboarding = () => {
  const [tab, setTab] = useState(1);

  return (
    <section className="flex flex-col justify-between bg-off-white px-6 py-10 lg:p-10 overflow-y-scroll ">
      <article>
        <img className="h-8 w-28" src={logo} alt="travelbay's log" />
      </article>

      {tab === 1 ? (
        <article className="lg:h-fit my-8 bg-white p-4 rounded-lg">
          <div className="xl:flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-lg text-dark-2">Packages</h3>
              <p>Travel packages made for you</p>
            </div>

            <div className="mt-2 xl:mt-0 w-5/6 xl:w-fit">
              <Button text="Create custom trip" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <EmptyPackage />
            <EmptyPackage />
          </div>
        </article>
      ) : (
        <article className=" h-24 lg:h-96 my-8 p-4 rounded-lg"></article>
      )}

      <article>
        <div className="text-center">
          <h2 className="text-dark-blue-1 text-xl font-bold">
            {tab === 1
              ? 'Access packages & create custom trips'
              : 'Customize a payment plan for your dream trip'}
          </h2>

          <p className="text-lg text-gray-2 mt-2">
            {tab === 1
              ? ' Explore ready made packages from the best deals in the market  for you. Tailor your perfect adventure with our custom trip creation tool.'
              : 'Choose a payment frequency that works for you to make your dream trip happen. You can pay in installments before the departure date is close.'}
          </p>
        </div>

        <div className="flex items-center justify-center mt-8">
          <div
            onClick={() => setTab(1)}
            className={` ${
              tab === 1 ? 'bg-primary-blue' : 'bg-gray-3'
            } block h-2 w-20 rounded-3xl cursor-pointer`}
          ></div>

          <div
            onClick={() => setTab(2)}
            className={` ${
              tab === 2 ? 'bg-primary-blue' : 'bg-gray-3'
            } block h-2 w-20 rounded-3xl cursor-pointer ml-4`}
          ></div>
        </div>
      </article>

      <div className="flex justify-center lg:hidden mt-12">
        <img src={arrowDownDark} alt="down arrow icon" />
      </div>
    </section>
  );
};

export default Onboarding;
