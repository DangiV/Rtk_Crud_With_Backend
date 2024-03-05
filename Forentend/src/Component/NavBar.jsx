import React from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { SearchProduct } from '../Redux/Feature/UserSlice';

const NavBar = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.users.users);

    const HandleChange = (e) => {
        let query = e.target.value;
        console.log('search item', query);
        dispatch(SearchProduct(query))
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Navbar
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">

                    <li className="nav-item active">
                        <Link className="nav-link" to="/Login">
                            Login
                        </Link>
                    </li>
                    
                    <li className="nav-item active">
                        <Link className="nav-link" to="/CreateProduct">
                            Create Product
                        </Link>
                    </li>

                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            All Product ({products.length})
                        </Link>
                    </li>



                </ul>

                <Box
                    className='ms-auto'
                    component="form"
                    sx={{
                        '& > :not(style)': { width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="standard-basic" label="Search" variant="standard" onChange={(e) => HandleChange(e)} />
                </Box>

            </div>
        </nav>
    );
};

export default NavBar;