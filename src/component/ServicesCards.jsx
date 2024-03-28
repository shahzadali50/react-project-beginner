import React from 'react'
import {NavLink } from "react-router-dom";
function ServicesCards(props) {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
                <div className="card">
                    <img src={props.imgscr} className="card-img-top img-fluid" alt="not-show" />
                    <div className="card-body">
                        <h5 className="card-title">{ props.title }</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesCards