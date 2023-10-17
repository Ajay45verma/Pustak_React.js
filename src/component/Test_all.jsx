import React, { useState } from "react";
import axios from "axios";

export default function Test_all(){
  let [msg,setMsg]=useState("")
  const [data, setData] = useState({
    mail: "",
    password: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      mail: data.mail,
      password: data.password
    };
    axios.post("http://127.0.0.1:8000/api/test", userData).then((response) => {
      console.log(response.status, response.dat);
      setMsg(response.msg)
    });
  };

  return (
    <div>
      <h1>Login Account</h1>
      <h2>{msg}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="mail"
            value={data.mail}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};



// import React from 'react'
// import { useState, useEffect } from "react";
// import axios from "axios";

// export default function Test_all() {
//     const [students, setStudents] = useState([])
//     useEffect(()=>{
//       async function getAllStudent(){
//         try {
//           const students = await axios.get("http://127.0.0.1:8000/api/")
//           console.log(students.data)
//           setStudents(students.data)
//         } catch (error) {
//           console.log(error)
//         }
//       }
//       getAllStudent()
//     }, [])
//     return (
//       <div className="App">
//        <h1>Connect React JS to Django</h1>
//        {
//          students.map((student, i)=>{
//            return (
//              <h2 key={i}>{student.mail} {student.password}</h2>
//            )
//          })
//        }
//       </div>
//     );
  
// }
