import React from "react";
import { Link, useLocation, Navigate, Outlet } from "react-router-dom";

const HelloPage = () => {
    return (
        <section>
            <Link to='/login'>
                <h1> Get started !</h1>
            </Link>
        </section>
    )
}

export default HelloPage