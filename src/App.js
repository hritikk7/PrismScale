import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeDetails from "./components/EmployeeDetails";

function App() {
  const [employeesData, setEmployeesData] = useState([]);

  const handleSave = () => {
    if (employeesData.some((employee) => Object.values(employee).some((value) => !value.trim()))) {
      alert("Some entries have no values. Please fill in all fields before saving.");
      return;
    }

    localStorage.setItem("employeesData", JSON.stringify(employeesData));
    alert("Employees data saved");
  };

  console.log("employeesData", employeesData);
  return (
    <div className="h-full w-full  bg-slate-200">
      <div className=" ">
        <div className="flex justify-between px-20 mt-12">
          <h6 className="text-xl font-bold">Employees</h6>
          <button className="h-9 w-40 bg-violet-800 text-white font-bold rounded-md"
          onClick={handleSave}>Save</button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-20 w-full">
        <EmployeeCard setEmployeesData={setEmployeesData} />
      </div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center w-full">
          {employeesData.map((employee, index) => (
            <EmployeeDetails
              index={index}
              employee={employee}
              setEmployeesData={setEmployeesData}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
