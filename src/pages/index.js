import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

import { logo } from '../assets/icons';
import { IdCard } from '../components/section';
import { IdCardSkeleton } from '../skeletons';

const FETCH_USER_QUERY = gql`
  query GetUser {
    me {
      email
      firstName
      id
      lastName
      phoneNumber
    }
  }
`;

const Home = () => {
  const [token, setToken] = useState({});

  useEffect(() => {
    const stored_token = sessionStorage.getItem('token');

    if (stored_token) {
      setToken(stored_token);
    } else {
      setToken(null);
    }
  }, [token]);

  const { data, loading, error } = useQuery(FETCH_USER_QUERY);

  console.log({ data, loading, error });

  return token === null || token === undefined ? (
    <Navigate to="/login" replace />
  ) : (
    <div className="relative bg-off-white h-screen px-4 lg:px-0 py-10 lg:py-0 lg:flex items-center justify-center">
      <div className="lg:absolute top-12 right-20">
        <img src={logo} alt="travelbay logo" />
      </div>

      <div className="mt-8 p-6 lg:p-10 bg-white max-w-2xl  shadow-md rounded  text-dark-blue-1">
        <h1 className=" text-2xl lg:text-[32px] text-dark-blue-2 font-bold">
          Welcome {data?.me?.firstName} 🎉
        </h1>

        <p className="text-base mt-2">
          Here are some of the details you provided during registration.
        </p>

        {loading ? (
          <IdCardSkeleton />
        ) : data && data?.length !== 0 ? (
          <IdCard data={data?.me} />
        ) : (
          <div className="bg-white border border-red-400 p-5 mt-5 text-red-500">
            {error?.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
