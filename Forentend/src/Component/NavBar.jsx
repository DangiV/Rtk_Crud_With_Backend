import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { makeApi } from '../api/MakeApi';
import TextField from '@mui/material/TextField';

const NavBar = () => {
    const products = useSelector((state) => state.users.users);

    const [key, setkey] = useState("");

    const HandleChange = (e) => {
        setkey(e.target.value)
    }

    useEffect(() => {
        // call api if someone type something in search
        if (key) {
            const timeoutId = setTimeout(async () => {
                // Call your API function here with the searchTerm
                try {
                    const response = await makeApi("get", `/search/${key}`,)
                    console.log("response", response);
                } catch (error) {
                    console.log(error);
                }
                console.log('API call with searchTerm:', key);
            }, 1000);

            // Use a setTimeout to delay the API call after the user stops typing

            // Clear the timeout on each key press to reset the delay
            return () => clearTimeout(timeoutId);
        }
    }, [key]);


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