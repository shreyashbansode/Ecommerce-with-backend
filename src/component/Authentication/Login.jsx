import react from "react";
import "./auth.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";


const Login = () => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [data, setData] = useState()
    console.log(data);

    const navigate = useNavigate()

    useEffect(() => {

        axios.get("http://localhost:1031/")
            .then((res) => {
                const data = res.data;
                setData(data);
                // console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })

    }, [])

    const loginHandler = (e) => {
        e.preventDefault();
        data.filter((row)=>{

            if (row.email === email  && row.password === password)
            {
      
              if(row.type === "Seller")
              {
      
                navigate(`/seller/${row._id}`);
      
              }
      
              else if(row.type == "User")
              {
                navigate(`/user/${row._id}`);
              }
              else{
                navigate("/")
              }
      
            }
      
      
          })
      

    }

    return (
        <>

            <div className="login_section d_grid">
                <div className="img">
                    <img src="./Images/assets/bcompany.png" alt="" />
                </div>
                <div className="login_content">
                    <form onSubmit={loginHandler}>
                        <div className="bx_center">
                            <div className="mb-3 ">
                                <label for="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => setPassword(e.target.value)} />
                            </div>

                            <div className="btns">

                                <button type="submit" className="btn btn-light">Sign In</button>
                                <NavLink to="/signup"> <button type="button" className="btn btn-secondary">Register</button></NavLink>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}

export default Login