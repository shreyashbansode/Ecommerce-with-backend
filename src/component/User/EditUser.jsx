import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Footer from './../Footer/Footer'

const EditUser = () => {

    const { id } = useParams()


    const [firstName, setfirstName] = useState()
    const [lastName, setlastName] = useState()
    const [mobNumber, setNumber] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [Address, setAddress] = useState()



    useEffect(() => {
        axios.get(`http://localhost:1031/${id}`)
            .then((res) => {

                const data = res.data[0];
                setfirstName(data.firstName);
                setlastName(data.lastName);
                setNumber(data.mobNumber);
                setEmail(data.email);
                setPassword(data.password);
                setAddress(data.Address);

            })
    }, [])


    const navigate = useNavigate()

    const updateHandler = (e) => {

        e.preventDefault()

        const myobj = {
            firstName,
            lastName,
            Number,
            email,
            password,
            Address,
        }

        axios.put(`http://localhost:1031/${id}`, myobj)
            .then(() => {
                alert("register successful")
                navigate(`/user/${id}`)

            })
            .catch((error) => {
                alert("error: " + error);
            })

    }



    return (
        <>

            <div className="signup d_grid">
                <div className="img">
                    <img src="./Images/assets/bcompany.png" alt="err" />
                </div>

                <div className=" bx_center">
                    <form onSubmit={updateHandler}>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="exampleInputTEXT1" aria-describedby="emailHelp" onChange={(e) => setfirstName(e.target.value)} value={firstName} required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" onChange={(e) => setlastName(e.target.value)} value={lastName} required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Phone No</label>
                            <input type="number" className="form-control" id="exampleInputText1" aria-describedby="emailHelp" onChange={(e) => setNumber(e.target.value)} value={mobNumber} required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email} required />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => { setPassword(e.target.value) }} value={password} />
                        </div>


                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Address</label>
                            <input type="text" className="form-control" id="exampleInputTEXT1" aria-describedby="emailHelp" onChange={(e) => setAddress(e.target.value)} value={Address} required />
                        </div>

                        <div className="btns">
                            <button type="submit" className="btn btn-light" >Update Information</button>

                        </div>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default EditUser;