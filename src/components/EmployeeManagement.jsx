import EmpTable from "./EmpTable";
import { Link } from "react-router-dom";
import { useCollection } from "../hooks/useCollection";


const EmployeeManagement = () => {
    const {documents:employees} = useCollection('employees');





const handleEditEmployee = ()=>{
    
}

return(
    <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Employee Management</h1>
        <div className="mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Link to="/employee">
            Add Employee
            </Link>
        </button>
        </div>
        <div>
        {employees && <EmpTable employees = {employees} handleEditEmployee ={handleEditEmployee} />}
        </div>
    </div>
      );
};

export default EmployeeManagement;