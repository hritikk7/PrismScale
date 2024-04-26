import React, { useState } from "react";

function EmployeeCard({ setEmployeesData }) {
  const [empData, setEmpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
  });

  const handleInputChange = (e) => {
    setEmpData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  console.log("empData", empData);


  const handleAdd = () => {
    setEmployeesData((prevEmployeesData) => {
      return [...prevEmployeesData, empData];
    });
    setEmpData({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
      });
  };


  return (
    <div className=" mb-4">
      <div className="flex justify-between mb-3">
        <h6 className="text-xl font-bold">Employees</h6>
      </div>
      <div className=" mb-3">
        <div className="">
          <input
            type="text"
            name="firstName"
            className="m-1 h-8 p-3 w-36"
            value={empData.firstName}
            onChange={(e) => handleInputChange(e)}
            placeholder="Enter First Name"
          />
          <input
            type="text"
            name="lastName"
            className="m-1 h-8 p-3 w-36"
            value={empData.lastName}
            onChange={(e) => handleInputChange(e)}
            placeholder="Enter Last Name"
          />
        </div>
        <div className="">
          <input
            type="email"
            name="email"
            className="m-1 h-8 p-3 w-36"
            value={empData.email}
            onChange={(e) => handleInputChange(e)}
            placeholder="Enter email"
          />
          <input
            type="date"
            name="dob"
            className="m-1 h-8 p-3 w-36"
            value={empData.dob}
            onChange={(e) => handleInputChange(e)}
            placeholder="Enter Dob"
          />
        </div>
      </div>
      <div className="w-full mb-6 flex justify-end">
        <button className="bg-green-500 h-9 w-28 text-white font-bold rounded-md " onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;
