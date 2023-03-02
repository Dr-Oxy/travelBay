import React from 'react';

import EmptyPackage from './EmptyPackage';
import { Button } from '../element';

const TravelPackage = () => {
  return (
    <div className="w-full  h-fit lg:h-[550px] flex flex-col justify-between lg:mb-3">
      <article className="lg:h-fit bg-white p-4 rounded-lg">
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
          <div className="hidden lg:block">
            <EmptyPackage />
          </div>
        </div>
      </article>

      <article className="mt-6 lg:mt-0">
        <div className="text-center">
          <h2 className="text-dark-blue-1 text-xl font-bold">
            Access packages & create custom trips
          </h2>

          <p className="text-lg text-gray-2 mt-2">
            Explore ready made packages from the best deals in the market for
            you. Tailor your perfect adventure with our custom trip creation
            tool.
          </p>
        </div>
      </article>
    </div>
  );
};

export default TravelPackage;
