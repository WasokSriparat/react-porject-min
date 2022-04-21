import React from 'react'
import { Link } from "react-router-dom";

function ArtistManage() {
  return (
    <>
    <div>
        <div class="d-flex align-items-center justify-content-md-between my-1">
          <h3>Artist List</h3>
          <Link to="/artist/add" class="btn btn-success"> + Add Artist</Link>
        </div>
        <hr />
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
          <table class="table table-bordered table-striped mb-0">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Artist Name</th>
                <th scope="col">Artist Picture</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Artist Description</th>
                <th scope="col" width="180px" class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>MarkMarkMarkMark</td>
                <td>Otto</td>
                <td>dadadadsa@mdo</td>
                <td>afesagedshbredshnrfdejhnrej@mdo</td>
                <td class="d-flex justify-content-between">
                <Link to="/artist/edit/1" class="btn btn-warning ">Update</Link>
                  <button type="button" class="btn btn-danger ">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>MarkMarkMarkMark</td>
                <td>Otto</td>
                <td>dadadadsa@mdo</td>
                <td>afesagedshbredshnrfdejhnrej@mdo</td>
                <td class="d-flex justify-content-between">
                  <button type="button" class="btn btn-warning ">Update</button>
                  <button type="button" class="btn btn-danger ">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>MarkMarkMarkMark</td>
                <td>Otto</td>
                <td>dadadadsa@mdo</td>
                <td>afesagedshbredshnrfdejhnrej@mdo</td>
                <td class="d-flex justify-content-between">
                  <button type="button" class="btn btn-warning ">Update</button>
                  <button type="button" class="btn btn-danger ">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ArtistManage