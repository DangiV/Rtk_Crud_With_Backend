import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { EditProduct } from '../Redux/Feature/UserSlice';

const Editproduct = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const nevigate = useNavigate()
    const products = useSelector((state) => state.users.users);

    // here we show specific user id data after filter
    const filterData = Array.isArray(products) ? products.filter((item) => item._id === id)[0] : null;

    // here we set initial data of state
    const [productData, setProductData] = useState({
        pName: filterData ? filterData.pName : '',
        pPrice: filterData ? filterData.pPrice : ''
    })

    // here we have created onChange function 
    const HandleChange = (e) => {
        const { name, value } = e.target;
        setProductData((oldData) => ({
            ...oldData,
            [name]: value
        }))
    }

    const HandleSubmit = (e) => {
        console.log("dataaa", id);
        e.preventDefault();
        console.log("form submitted", productData);
        dispatch(EditProduct({productData , id}))
        nevigate('/')
    }
    return (
        <>
            <form className='text-center border border-light p-5' onSubmit={HandleSubmit}>
                <p className="h4 mb-5">Create Product </p>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Edit  Product Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        aria-describedby="emailHelp"
                        id="pName"
                        name='pName'
                        value={productData.pName}
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
                        value={productData.pPrice}
                        onChange={HandleChange}
                    />
                </div>

                <button type="submit" className="btn btn-info btn-block my-4">
                    Update
                </button>
            </form>
        </>
    )
}

export default Editproduct;
