import { Box } from '@mui/material';
import TextField from '@mui/material/TextField';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const products = useSelector((state) => state.users.users);

    const [searchData, setSearchData] = useState('')

    const HandleChange = (e) => {
        setSearchData(e.target.value);
        console.log(e.target.value);
    }

    const SeachData = async () => {
        const makeApi = await ("get", '/search', searchData)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Navbar
            </Link>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/CreateProduct">
                            Create Product
                        </Link>
                    </li>

                    <li className="nav-item active">
                        <Link className="nav-link" to="/">
                            {/* All Product ({products.length}) */}
                        </Link>
                    </li>

                </ul>


                <Box
                    className='ms-auto'
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
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