import React from "react";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, chef, supplier, taste, photo } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100">
      <figure className="w-[250px]">
        <img className="rounded-lg w-full" src={photo} alt="" />
      </figure>
      <div className="flex justify-between items-center w-full pl-2 pr-4 text-left">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>Chef: {chef}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn">View</button>
            <button className="btn">Edit</button>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-orange-500"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
