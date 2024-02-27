import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CreateProduct } from '../Redux/Feature/UserSlice'
import { useNavigate } from "react-router-dom";

const Createproduct = () => {
    const dispatch = useDispatch()
    const nevigate = useNavigate()

    const [pData, setPData] = useState({
        pName: '',
        pPrice: ''
    })

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setPData((val) => ({
            ...val,
            [name]: value
        }))
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        dispatch(CreateProduct(pData))
        nevigate('/')
    }
    return (
        <>
                <form className='text-center border border-light p-5' onSubmit={HandleSubmit}>
                    <p className="h4 mb-5">Create Product </p>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Product Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            aria-describedby="emailHelp"
                            id="pName"
                            name='pName'
                            value={pData.pName}
                            onChange={HandleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Product Price
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="pPrice"
                            name='pPrice'
                            value={pData.pPrice}
                            onChange={HandleChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-info btn-block my-4">
                        Create
                    </button>
                </form>
        </>
    )
}

export default Createproduct
