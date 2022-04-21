import React from 'react'
import { Link } from "react-router-dom";
import './Table.css'

function Home() {
  return (
    <>
      {/* User section */}
      <div class="row mb-5">
        <div class="d-flex align-items-center justify-content-md-between my-1">
          <h3>User List</h3>
          <Link to="/user" class="btn btn-primary" >Manage</Link>
        </div>
        <hr />
        <div class="home-table-wrapper-scroll-y home-my-custom-scrollbar">
          <table class="table table-bordered table-striped mb-0">
            <thead>
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <hr />
      <div class="row">
        {/* Artist Section */}
        <div class="col-6">
          <div class="d-flex align-items-center justify-content-md-between my-1">
            <h3>Artist List</h3>
            <Link to="/artist" class="btn btn-primary" >Manage</Link>
          </div>
          <hr />
          <div class="home-table-wrapper-scroll-y home-my-custom-scrollbar">
            <table class="table table-bordered table-striped mb-0">
              <thead>
                <tr>
                  <th scope="col">Artist ID</th>
                  <th scope="col">Artist Name</th>
                  <th scope="col">Artist DOB</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Song Section */}
        <div class="col-6">
            <div class="d-flex align-items-center justify-content-md-between my-1">
              <h3>Song List</h3>
              <Link to="/song" class="btn btn-primary" >Manage</Link>
            </div>
            <hr />
            <div class="home-table-wrapper-scroll-y home-my-custom-scrollbar">
              <table class="table table-bordered table-striped mb-0">
                <thead>
                  <tr>
                    <th scope="col">Song ID</th>
                    <th scope="col">Song name</th>
                    <th scope="col">Artist Name</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </>
  )
}

export default Home