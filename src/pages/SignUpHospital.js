import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import "../css/SignUpHospital.css"

export default function SignUpHospital() {

    return (
        <div className="SignUpHospital">
            <div className="main_box">
                <div className="form_box">
                    <Link to="/">back</Link>
                    <h3>Signup to Medinav</h3>
                    <form className="row g-3">
                        <div className="mb-3 form_row">
                            <label for="exampleInputEmail1" className="form-label">Hospital Name</label>
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter your full name" />
                        </div>
                        <div className="mb-3 form_row">
                            <label for="exampleInputEmail1" className="form-label">Address</label>
                            <input type="address" className="form-control" id="exampleInputEmail1" placeholder="Enter your address" />
                        </div>
                        <div class="col-md-6" >
                            <label for="inputEmail4" class="form-label">Email</label>
                            <input type="email" class="form-control" id="inputEmail4"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Landline Number</label>
                            <input type="number" class="form-control" id="inputPassword4"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Primary Mobile Number</label>
                            <input type="number" class="form-control" id="inputEmail4"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Secondary Mobile Number</label>
                            <input type="number" class="form-control" id="inputPassword4"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">Number of On Call Doctors</label>
                            <input type="number" class="form-control" id="inputEmail4"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Number of Operational Ambulances</label>
                            <input type="number" class="form-control" id="inputPassword4"/>
                        </div>
                        <div className="bring_child_to_center">
                            <button type="submit" className="btn btn-primary button">Creat Account</button>
                        </div>

                      


                    </form>






                    <p className="bring_link_to_center">Already an account?<Link to="/LogIn">Log In</Link></p>
                    <p className="bring_link_to_center"><Link to="/SignUp/Reporter">Sign up as Reporter</Link></p>



                </div>


            </div>
        </div>
    )
}