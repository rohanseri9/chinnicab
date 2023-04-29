import React, { useState, useEffect } from 'react';
import { useNavigate, Redirect,Route  } from 'react-router-dom';
import { db } from '../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const Employee = () => {     
    const [employeeName, setEmployeeName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    let navigate = useNavigate();

const handleSubmit = async (event)=>{
    event.preventDefault();
    const ref = collection(db,'employees')
    await addDoc(ref, {
        dateOfBirth:dob,
        email:email,
        mobile:mobile,
        name:employeeName
    });    
    navigate('/employees');
}
  return (
    <div>
          <h1>Employee</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name"
              value={employeeName}
              onChange={(event) => setEmployeeName(event.target.value)}
            />
            <input
              type="date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(event) => setDob(event.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              value={mobile}
              onChange={(event) => setMobile(event.target.value)}
            />
            <button type="submit">Add Employee</button>
          </form>
          </div>
  );
};

export default Employee;