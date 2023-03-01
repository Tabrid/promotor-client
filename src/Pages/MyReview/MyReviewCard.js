import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const MyReviewCard = ({Review}) => {
  const {Refresh ,setRefresh} = useContext(AuthContext);
  const handleDelete = (id) =>{
   
      fetch(`https://server-psi-puce.vercel.app/review/${id}`,{
        method: "DELETE",
        headers: {
          authorization : ` Bearer ${localStorage.getItem('secret-token')}`
       },
      })
          .then((response) => response.json())
          .then((data) => {
            setRefresh(!Refresh)
            console.log(data);
            toast("successfully delete");
          })
          .catch((err) => {
            console.log(err);
          })       
  }
const navigate = useNavigate();
const handleEdit = (id) =>{
  navigate(`/review/edit/${id}`)

}



  return (
    <div className="card w-96 bg-gray-900 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-white">{Review.productName}</h2>
        <p className="text-white">
        {Review.rating}
        </p>
        <p className="text-white">
        {Review.description}
        </p>
        <div className="flex justify-between mt-2">
        <div className="card-actions justify-start">
          <button onClick={() => handleEdit(Review._id)} className="btn btn-s">Edit</button>
        </div>
        <div className="card-actions justify-end">
          <button onClick={() => handleDelete(Review._id)} className="btn btn-s">Delete</button>
        </div>
        <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
