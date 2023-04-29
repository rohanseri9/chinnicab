import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { Link } from "react-router-dom";

const EmpTable = ({employees,handleEditEmployee}) => {
    
    const handleDeleteEmployee = async (id)=>{
        const ref = doc(db,'employees',id)
        await deleteDoc(ref)
    }

return(
<div className="mb-8">
<h2 className="text-xl font-bold mb-4">Employees</h2> 
<table className="w-full table-auto border-collapse">
        <thead>
            <tr>
                <th className="border border-gray-400 px-4 py-2 text-left">Employee ID</th>
                <th className="border border-gray-400 px-4 py-2 text-left">Name</th>
                <th className="border border-gray-400 px-4 py-2 text-left">Date of Birth</th>
                <th className="border border-gray-400 px-4 py-2 text-left">Email</th>
                <th className="border border-gray-400 px-4 py-2 text-left">Mobile Number</th>
                <th className="border border-gray-400 px-4 py-2 text-left">Action</th>
            </tr>
        </thead>
        <tbody>
            {employees.map(employee => (
                <tr key={employee.id}>

                    <td className="border px-4 py-2">{employee.id}</td>
                    <td className="border px-4 py-2">{employee.name}</td>
                    <td className="border px-4 py-2">{employee.dateOfBirth}</td>
                    <td className="border px-4 py-2">{employee.email}</td>
                    <td className="border px-4 py-2">{employee.mobile}</td>
                    <td className="border px-4 py-2">
                    <button onClick={() => handleDeleteEmployee(employee.id)}className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
                    <Link to ={`/edit-employee/${employee.id}`}>
                    <button onClick={() => handleEditEmployee(employee.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                    </Link>
                    </td>
                    
                </tr>
            ))}
        </tbody>
</table>
</div>
     );
};

export default EmpTable;