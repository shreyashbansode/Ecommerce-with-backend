import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
const NavBar = (props) => {

    const [data, setData] = useState([]);

    const uid = props.id;
    const pid = props.pid;

    console.log(props);

    console.log(pid)



    useEffect(() => {
        axios.get("http://localhost:1031/cart/get")
            .then((res) => {
                const data = res.data;
                setData(data);

            })
        // setuserId(props.id);
    }, [])

    const navigate = useNavigate();

    const Logout = () => {
        navigate("/")

    }

    return (
        <>
            <div className="navbar">
                <div className="navbar-content">

                        <div className="navbar-img">

                            <img src="/static/bcompany.png" alt="err" />
                        </div>

                    <div className="search">
                        <nav className="navbar ">

                            <input className="form-control mr-sm-2" type="search" placeholder="Enter your product name.." aria-label="Search" />
                            <button className="btn btn-outline my-2 my-sm-0" type="submit">Search</button>

                        </nav>
                    </div>
                    <div className="btn">

                        <NavLink to={`/edit/${uid}`}><button> <span>Manage_account</span> </button></NavLink>
                        <NavLink to={`/cart/${uid}/${pid}`}><button>Shoping_cart</button></NavLink>
                        <div className="btn_count" >
                            <span >{data.length}</span>
                        </div>
                        <button onClick={Logout}>logout</button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default NavBar;