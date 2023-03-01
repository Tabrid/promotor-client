import React from "react";

const Stat = () => {
  return (
    <div className="stats mt-11 bg-gray-900 shadow w-full">
      <div className="stat">
        <div className="stat-figure text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title text-white">Total Likes</div>
        <div className="stat-value text-white">25.6K</div>
        <div className="stat-desc text-white">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title text-white">Page Views</div>
        <div className="stat-value text-white">2.6M</div>
        <div className="stat-desc text-white">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-value text-white">86%</div>
        <div className="stat-title text-white">Tasks done</div>
        <div className="stat-desc text-white">31 tasks remaining</div>
      </div>
    </div>
  );
};

export default Stat;
