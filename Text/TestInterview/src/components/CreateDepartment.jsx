import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function CreateDepartment({ onBackToDashboard }) {
  const [departmentCode, setDepartmentCode] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const history = useNavigate();

  const handleCreate = async () => {
    try {
      const response = await axios.post(
        "https://uat.elabpro.in/api/v1/Department/create",
        {
          departmentCode,
          departmentName,
          isActive,
        }
      );
      history.push("/dashboard");
    } catch (error) {
      alert("failed");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter here"
        onChange={(e) => setDepartmentCode(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter here"
        onChange={(e) => setDepartmentName(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={isActive}
          onChange={(e) => setIsActive(e.target.checked)}
        />
      </label>
      <button onClick={handleCreate}>Create</button>
      <button onClick={onBackToDashboard}>back to list</button>
    </div>
  );
}

export default CreateDepartment;
