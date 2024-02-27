import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const products = useSelector((state) => state.users.users);

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

                <form className="form-inline my-2 my-lg-0 ms-auto">
                    <div className="input-group">
                        <input
                            className="form-control"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </nav>
    );
};

export default NavBar;