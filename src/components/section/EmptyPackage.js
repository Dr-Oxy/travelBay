import React from 'react';
import { emptyHeartIcon } from '../../assets/icons';

const EmptyPackage = () => {
  const arr = [1, 2, 3];

  return (
    <div className="bg-[#F5F5F5] pb-4">
      <div className="bg-gray-4 h-28 p-4">
        <div className="h-10 w-10 ml-auto rounded-full cursor-pointer bg-white flex items-center justify-center">
          <img src={emptyHeartIcon} alt="heart icon" />
        </div>
      </div>

      <div className="px-2">
        {arr.map((item, index) => (
          <div
            key={index}
            className="bg-[#E3E3E3] w-full h-2 rounded-lg mt-3"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default EmptyPackage;
