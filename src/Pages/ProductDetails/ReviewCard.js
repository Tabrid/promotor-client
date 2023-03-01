import React from "react";

const ReviewCard = ({Review}) => {
  return (
    <div className="card w-96 bg-gray-900 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-white">{Review.name}</h2>
        <p className="text-white">
         {Review.rating}
        </p>
        <p className="text-white">
         {Review.description}
        </p>
      </div>
    </div>
  );
};

export default ReviewCard;
