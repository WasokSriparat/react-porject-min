import React from 'react'
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

function UserManage() {

  const onDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

  return (
    <>
      <div>
        <div class="d-flex align-items-center justify-content-md-between my-1">
          <h3>User List</h3>
          <Link to="/user/add" class="btn btn-success"> + Add User</Link>
        </div>
        <hr />
        <div class="table-wrapper-scroll-y my-custom-scrollbar">
          <table class="table table-bordered table-striped mb-0">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Username</th>
                <th scope="col">Firstname</th>
                <th scope="col">Lastname</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Age</th>
                <th scope="col" width="180px" class="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>MarkMarkMarkMark</td>
                <td>Otto</td>
                <td>Mark</td>
                <td>dadadadsa@mdo</td>
                <td>afesagedshbredshnrfdejhnrej@mdo</td>
                <td>20</td>
                <td class="d-flex justify-content-between">
                  <Link to="/user/edit/1" class="btn btn-warning ">Update</Link>
                  <button type="button" class="btn btn-danger" onClick={onDelete} >Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>MarkMarkMarkMark</td>
                <td>Otto</td>
                <td>Mark</td>
                <td>dadadadsa@mdo</td>
                <td>afesagedshbredshnrfdejhnrej@mdo</td>
                <td>20</td>
                <td class="d-flex justify-content-between">
                  <Link to="/user/edit/1" class="btn btn-warning ">Update</Link>
                  <button type="button" class="btn btn-danger ">Delete</button>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>MarkMarkMarkMark</td>
                <td>Otto</td>
                <td>Mark</td>
                <td>dadadadsa@mdo</td>
                <td>afesagedshbredshnrfdejhnrej@mdo</td>
                <td>20</td>
                <td class="d-flex justify-content-between">
                  <Link to="/user/edit/1" class="btn btn-warning ">Update</Link>
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



export default UserManage