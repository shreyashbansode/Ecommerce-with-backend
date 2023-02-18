import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

  const [firstName, setfirstName] = useState()
  const [lastName, setlastName] = useState()
  const [mobNumber, setNumber] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [Address, setAddress] = useState()

  const [type, setType] = useState("User")

  const navigate = useNavigate()
  const submitHandler = (e) => {

    e.preventDefault()

    const myobj = {
      firstName,
      lastName,
      mobNumber,
      email,
      password,
      Address,
      type,
    }

    axios.post("http://localhost:1031/", myobj)
      .then(() => {
        alert("register successful")
        navigate("/")

      })
      .catch((error) => {
        alert("error: " + error);
      })

  }



  return (
    <>

      <div className="signup d_grid">
        <div className="img">
          <img src="/static/bcompany.png" alt="err" />
        </div>

        <div className=" bx_center">
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">First Name</label>
              <input type="text" className="form-control" id="exampleInputTEXT1" aria-describedby="emailHelp" onChange={(e) => setfirstName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" onChange={(e) => setlastName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Phone No</label>
              <input type="number" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" onChange={(e) => setNumber(e.target.value)} required />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} required />
              <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => { setPassword(e.target.value) }} />
            </div>


            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Address</label>
              <input type="text" className="form-control" id="exampleInputTEXT1" aria-describedby="emailHelp" onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div className='type'>
              <label for="exampleInputEmail1" className="form-label">Type</label>
              <select name="" id="" className="form-control" onClick={(e) => setType(e.target.value)}>

                <option value="User">User</option>
                <option value="Seller">Seller</option>
              </select>

            </div>
            <div className="btns">
              <button type="submit" className="btn btn-light" >Register</button>
              <NavLink to="/"><button type="button" className="btn btn-secondary">Sign In</button></NavLink>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignUp