import React, { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Pdetails = () => {

    const [Name, setName] = useState();
    const [Price, setPrice] = useState();
    const [Type, setType] = useState("Men");
    const [Details, setDetails] = useState();

    const navigate = useNavigate();

        
        const [ firstName,setfirstName]= useState();
    const { id } = useParams();



    // useEffect(() => {

    //     axios.get(`http://localhost:1031/${id}`)
    //         .then(async (res) => {
    //             const userdata = await res.data;
    //             setuserData(userdata);

    //         })
    // }, [id])


    const submitHandler = (e) => {
        e.preventDefault();

        const myobj = {
            uid: id,
            
            Name,
            Price,
            Type,
            Details
        }

        axios.post('http://localhost:1031/product', myobj)
            .then(() => {
                alert('Product Added successfully')
                navigate(`/seller/${id}`)
            })
            .catch(err => {
                alert('Error: ' + err.message)
            })
    }

    return (
        <>
            <div className="pdetails">
                <div className="content">
                    <h2>Hello Swapnil</h2>
                    <h2>Add New Product</h2>
                    <p>&gt;</p>
                </div>
                <form onSubmit={submitHandler}>
                    <div className="details">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Name:</label>
                            <input type="text" className="form-control" id="exampleInputTEXT1" aria-describedby="emailHelp" onChange={(e) => setName(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Price:</label>
                            <input type="number" className="form-control" id="exampleInputTEXT1" aria-describedby="emailHelp" onChange={(e) => setPrice(e.target.value)} required />
                        </div>
                        <label for="exampleInputEmail1" className="form-label">Type:</label>
                        <div className="option">
                            <select name="" id="" onClick={(e) => setType(e.target.value)}>
                                <option value="Men">Men </option>
                                <option value="Women">Women </option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label" >Details</label>
                            <input type="text" className="form-control" id="exampleInputTEXT1" aria-describedby="emailHelp" onChange={(e) => { setDetails(e.target.value) }} required />
                        </div>
                        <div className="addproduct">
                            <button type='submit'>Add Product</button>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />


        </>
    )
}

export default Pdetails