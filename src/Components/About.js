import React from "react";

const About = () => {
  return (
    <div className="p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to this highly Optimized and Fast Loading Food Ordering App
      </h1>
      <p className="font-semibold font-serif">
        A large-scale and highly performant App, Technology Used - React,
        Javascript, Tailwind, Redux.
      </p>
      <ul className="font-serif">
        <li>
          {" "}
          1) Created a custom Shimmer UI component for loading placeholders.
        </li>
        <li> 2) Powered up the data layer using Swiggy's API data.</li>
        <li>
          3) Implemented lazy loading/bundle chunking for optimal performance.
        </li>
        <li>
          4) Used React-Redux for efficient state management and fast updates.
        </li>
      </ul>
    </div>
  );
};

export default About;
