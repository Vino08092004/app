import React from 'react';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); // Assuming user object is stored here
  
  const handleLogout = () => {
    localStorage.removeItem("Loggedin");
    navigate("/login");
  }

  return (
    <section className="vh-100 bg-image"
      style={{
        backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Homepage</h2>
                  <p className="text-center">Welcome, {user ? user.name : "Guest"}</p> {/* Accessing name */}
                  <button 
                    onClick={handleLogout}
                    type="button"
                    className="btn btn-success btn-block btn-lg gradient-custom-4 text-body center">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home;
