import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditDepartment() {
  const { id } = useParams();
  const [department, setDepartment] = useState(null);
  const [updatedDepartmentCode, setUpdatedDepartmentCode] = useState("");
  const [updatedDepartmentName, setUpdatedDepartmentName] = useState("");
  const [updatedIsActive, setUpdatedIsActive] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const response = await axios.get(
          '"https://uat.elabpro.in/api.v1/Department/${id}'
        );
        setDepartment(response.data);
        setUpdatedDepartmentCode(response.data.departmentCode);
        setUpdatedDepartmentName(response.data.departmentName);
        setUpdatedIsActive(response.data.isActice);
      } catch (error) {
        alert("error");
      }
    };
    fetchDepartment();
  }, [id]);
  const handleUpdate = async () => {
    try {
      await axios.put(
        "https://uat.elabpro.in/api.v1/Department/update/${department.id}",
        {
          departmentCode: updatedDepartmentCode,
          departmentName: updatedDepartmentName,
          isActive: updatedIsActive,
        }
      );

      history.push("./dashboard");
    } catch (error) {
      alert("not updated");
    }
  };

  return (
    <div>
      {department && (
        <>
          <input
            type="text"
            value={updatedDepartmentCode}
            onChange={(e) => setUpdatedDepartmentCode(e.target.value)}
          />
          <input
            type="text"
            value={updatedDepartmentName}
            onChange={(e) => setUpdatedDepartmentName(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={updatedIsActive}
              onChange={(e) => setUpdatedIsActive(e.target.checked)}
            />
            Active
          </label>
          <button onClick={handleUpdate}>Update</button>
        </>
      )}
    </div>
  );
}

export default EditDepartment;
