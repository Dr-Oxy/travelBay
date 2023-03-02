import { avatarIcon } from '../assets/icons';

const IdCardSkeleton = () => {
  return (
    <div className="p-6 lg:p-10 flex flex-col lg:flex-row items-start justify-center mt-3 border-2 border-dark-blue-1 rounded-lg">
      <div className="h-40 w-40 mx-auto mb-4 lg:mb-0 bg-white shadow-md rounded-full flex items-center justify-center">
        <div className="h-20 w-20 bg-off-white shadow-lg rounded-full flex items-center justify-center">
          <img src={avatarIcon} alt="default avatar" />
        </div>
      </div>

      <div className="lg:ml-6 w-full lg:flex-1">
        <div className="text-base">
          <span className="font-medium">Full Name:</span>

          <span className="block bg-gray-200 p-2 rounded animate-pulse w-full"></span>
        </div>

        <div className="text-base my-3">
          <span className="font-medium">Email Address:</span>

          <span className="block bg-gray-200 p-2 rounded animate-pulse"></span>
        </div>

        <div className="text-base">
          <span className="font-medium">Phone Number:</span>

          <span className="block bg-gray-200 p-2 rounded animate-pulse"></span>
        </div>
      </div>
    </div>
  );
};

export default IdCardSkeleton;
