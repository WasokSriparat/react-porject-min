import React from 'react'
import { Link} from "react-router-dom";

function Navigation() {
    return (
        <>
            <nav class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom ">
                {/* <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                </a> */}

                <ul class="nav col-12 col-md-auto mx-3 mb-2 justify-content-center mb-md-0">
                    <li><Link to="/home" class="nav-link px-2 link-secondary">Home</Link></li>
                    <li><Link to="/user" class="nav-link px-2 link-dark">User Manage</Link></li>
                    <li><Link to="/song" class="nav-link px-2 link-secondary">Song Manage</Link></li>
                    <li><Link to="/artist" class="nav-link px-2 link-secondary">Artist Manage</Link></li>
                </ul>

                <div class="col-md-3 mx-3 text-end">
                    <Link to="/login" class="btn btn-outline-primary me-2">Login</Link>
                </div>
            </nav>
        </>
    )
}

export default Navigation