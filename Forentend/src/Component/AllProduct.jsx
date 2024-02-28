import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteProduct, GetAllDetails } from '../Redux/Feature/UserSlice'
import { useNavigate } from 'react-router-dom'

const AllProduct = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const products = useSelector((state) => state.users.users);

    const EditItem = (id) => {
        navigate(`/EditProduct/${id}`)
    }

    const DeleteItem = (id) => {
        dispatch(DeleteProduct(id))
    }

    useEffect(() => {
        dispatch(GetAllDetails())
    }, [dispatch, GetAllDetails])
    return (
        <>
            <h1>All Products List</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Price</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(products) && products.length > 0 ? (
                        products.map((item) => (
                            <tr key={item &&  item._id}>
                                <th scope="row">{item &&  item._id}</th>
                                <td>{item && item.pName}</td>
                                <td>{item &&  item.pPrice}</td>
                                <td><button className='btn btn-warning' onClick={() => EditItem(item._id)}>Edit</button></td>
                                <td><button className='btn btn-danger' onClick={() => DeleteItem(item._id)}>Delete</button></td>
                            </tr>
                        ))
                    ) : null
                    }
                </tbody>
            </table>
        </>
    )
}

export default AllProduct
