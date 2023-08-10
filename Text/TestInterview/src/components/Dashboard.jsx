import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function Dashboard() {
  const [departmentData, setDepartmentData] = useState([]);

  useEffect(() => {
    const fetchdepartmentData = async () => {
      try {
        const response = await axios.get(
          "https://uat.elabpro.in/api/v1/Department/getDepartmentData",
          { headers: { Authorization: "Bearer ${token" } }
        );
        setDepartmentData(response.data);
      } catch (error) {
        <h1>data not found</h1>;
      }
    };
    fetchdepartmentData();
  }, []);
  return (
    <div>
      <Link to="/create-department">Create new</Link>
      <ul>
        {departmentData.map((department) => (
          <li key={department.id}>
            {department.departmentCode} - {department.departmentName}
            {""}
            <Link to={"/edit-department.${department.id}"}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
