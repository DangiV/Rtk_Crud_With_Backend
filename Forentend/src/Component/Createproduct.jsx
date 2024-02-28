import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CreateProduct } from '../Redux/Feature/UserSlice'
import { useNavigate } from "react-router-dom";

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { makeApi } from '../api/MakeApi';

const Createproduct = () => {
    const dispatch = useDispatch()
    const nevigate = useNavigate()

    const [category, setCategory] = useState('')
    const [pData, setPData] = useState({
        pName: '',
        pPrice: '',
    })

    const HandleChange = (e) => {
        const { name, value } = e.target;
        setPData((val) => ({
            ...val,
            [name]: value
        }))
    }

    const handleChangCategory = (e) => {
        setCategory(e.target.value)
    }

    const HandleSubmit = async (e) => {
        e.preventDefault();
        const productData = {
            ...pData,
            category: category
        }
        dispatch(CreateProduct(productData))
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

                <div>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={category}
                            label="Age"
                            onChange={handleChangCategory}
                        >
                            <MenuItem value={'Car'}>Car</MenuItem>
                            <MenuItem value={'Bike'}>Bike</MenuItem>
                            <MenuItem value={'Tractor'}>Tractor</MenuItem>
                        </Select>
                    </FormControl>
                </div>


                <button type="submit" className="btn btn-info btn-block my-4">
                    Create
                </button>
            </form>
        </>
    )
}

export default Createproduct
