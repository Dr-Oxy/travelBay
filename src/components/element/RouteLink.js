import React from 'react';
import { Link } from 'react-router-dom';

const RouteLink = ({ title, link }) => {
  return (
    <Link to={link}>
      <span className="block text-base font-bold text-right cursor-pointer">
        {title}
      </span>
    </Link>
  );
};

export default RouteLink;
