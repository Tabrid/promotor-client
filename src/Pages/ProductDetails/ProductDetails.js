import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReviewCard from "./ReviewCard";
import PrivateRoute from "../../Routes/PrivateRoute/PrivateRoute";

const ProductDetails = () => {
  const { user ,Refresh , setRefresh } = useContext(AuthContext);
  const service = useLoaderData();
  const [Review, setReview] = useState([]);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleAddProduct = (data) => {
    const addReview = {
      name: data.name,
      mail: user.email,
      productId: service._id,
      productName: service.name,
      rating: data.rating,
      description: data.description,
    };

    fetch("https://server-psi-puce.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization : ` Bearer ${localStorage.getItem('secret-token')}`
      },
      body: JSON.stringify(addReview),
    })
      .then((res) => res.json())
      .then((result) => {
        setRefresh(!Refresh);
        console.log(result);
        toast("Review is added");
      })
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetch(`https://server-psi-puce.vercel.app/review?productId=${service._id}`,{
      headers: {
        authorization : ` Bearer ${localStorage.getItem('secret-token')}`
    }
    })
        .then((response) => response.json())
        .then((data) => setReview(data))
}, [service?._id]);
console.log(Review);




  return (
    <div>
      <div className="hero min-h-screen bg-gray-900">
        <div className="hero-content  flex-col lg:flex-row-reverse">
          <img src={service.img} alt="" className="w-1/2  rounded-lg shadow-2xl" />
          <div className="w-1/2">
            <h1 className="text-5xl text-white font-bold">{service.name}</h1>
            <p className="py-6 text-white">{service.description}</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 p-11">
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {

                Review.map(Review => <ReviewCard


                    key={Review._id}
                    Review={Review}
                ></ReviewCard>)

            }
        </div>

      </div>

      <div className="flex justify-center  bg-gray-900">
        <div className="card w-96  bg-gray-900 shadow-2xl ">
          <div className="card-body items-center text-center">
            <h1 className="text-2xl font-bold text-white">ADD REVIEW</h1>
            <form
              className="mt-6 text-center pb-6"
              onSubmit={handleSubmit(handleAddProduct)}
            >
              <input
                className="input input-bordered w-full max-w-xs mt-6"
                placeholder="name"
                {...register("name", {
                  required: "name is required",
                })}
                type="text"
              />
              {errors.name && (
                <p className="text-red-600">{errors.name?.message}</p>
              )}

              <br />
              <input
                className="input input-bordered w-full max-w-xs mt-6"
                placeholder="rating"
                {...register("rating", { required: "rating is required" })}
                type="text"
              />
              {errors.rating && (
                <p className="text-red-600">{errors.rating?.message}</p>
              )}
              <br />
              <input
                className="input input-bordered w-full max-w-xs h-24 mt-6"
                placeholder="description"
                {...register("description", {
                  required: "description is required",
                })}
                type="text"
              />
              {errors.description && (
                <p className="text-red-600">{errors.description?.message}</p>
              )}
              <br />

              <PrivateRoute><input
                className="btn w-full max-w-xs mt-6 "
                value="Submit"
                type="submit"
              /></PrivateRoute>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
