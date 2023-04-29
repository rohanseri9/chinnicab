import React, { useState, useEffect } from 'react';
import { useNavigate, Redirect,Route, useParams  } from 'react-router-dom';
import { db } from '../firebase/config';
import { doc, getDoc, setDoc } from "firebase/firestore";

const EditEmpl = () => {     
    const [employeeName, setEmployeeName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');

    const {id} = useParams();

    useEffect(()=>{
        const docRef = doc(db, "employees", id);
        getDoc(docRef).then((docSnap)=>{
            if (docSnap.exists()) {
                const empdata = docSnap.data();
                setEmployeeName(empdata.name)
                // setDob(new Date(empdata.dateOfBirth))
                setEmail(empdata.email)
                setMobile(empdata.mobile)
                console.log("Document data:", docSnap.data());
                } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
                }
        })
        },[])

 let navigate = useNavigate();

const handleSubmit = async (event)=>{
    event.preventDefault();
    // const ref = collection(db,'employees')
    await setDoc(doc(db,"employees",id), {
        dateOfBirth:dob,
        email:email,
        mobile:mobile,
        name:employeeName
    });    
    navigate('/employees');
}
  return (
    <div>
          <h1>Employee Details</h1>
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
            <button type="submit">Update Employee</button>
          </form>
          </div>
  );
};

export default EditEmpl;