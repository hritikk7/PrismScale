import React, { useState } from "react";

function EmployeeDetails({ employee, index, setEmployeesData }) {
  console.log("employee", employee);
  const { firstName, lastName, email, dob } = employee;

  const handleDelete = (index) => {
    setEmployeesData((prevEmployeesData) => {
      return prevEmployeesData.filter((_, i) => i !== index);
    });
  };

  return (
    <div className=" mb-6">
      <div className="flex justify-between mb-3">
        <h6 className="text-xl font-bold">{firstName + " " + lastName}</h6>
        <button
          className="h-9 w-40 bg-red-900 text-white font-bold rounded-md"
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
      </div>
      <div className=" mb-3">
        <div className="">
          <input
            type="text"
            name="firstName"
            value={firstName}
            className="m-1 h-8 p-3 w-36"
            placeholder="Enter First Name"
          />
          <input
            type="text"
            name="lastName"
            value={lastName}
            className="m-1 h-8 p-3 w-36"
            placeholder="Enter Last Name"
          />
        </div>
        <div className="">
          <input
            type="email"
            name="email"
            value={email}
            className="m-1 h-8 p-3 w-36"
            placeholder="Enter email"
          />
          <input
            type="text"
            name="dob"
            value={dob}
            className="m-1 h-8 p-3 w-36"
            placeholder="Enter Dob"
          />
        </div>
      </div>
    </div>
  );
}

export default EmployeeDetails;
