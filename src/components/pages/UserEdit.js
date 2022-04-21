import React from 'react'
import { Link } from "react-router-dom";

function UserEdit() {
  return (
    <>
      <div class="d-flex justify-content-center">
        <div class="w-50">
          <h1 class="mb-3">Edit User</h1>
          <hr />
          <form>
            <div class="mb-2">
              <label class="form-label">User ID</label>
              <input type="text" required class="form-control" value="sadas" disabled/>
            </div>
            <div class="mb-2">
              <label class="form-label">Username</label>
              <input type="text" required class="form-control" value="asd" disabled/>
            </div>
            <div class="mb-2">
              <label class="form-label">Password</label>
              <input type="password" required class="form-control" />
            </div>
            <div class="row mb-2">
              <div class="col">
                <label class="form-label">Firstname</label>
                <input type="text" required class="form-control" />
              </div>
              <div class="col">
                <label class="form-label">Laststname</label>
                <input type="text" required class="form-control" />
              </div>
            </div>
            <div class="mb-2">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input type="email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-2">
              <label class="form-label">Address</label>
              <input type="text" required class="form-control" />
            </div>
            <div class="mb-2">
              <label class="form-label">Age</label>
              <input type="text" required class="form-control" />
            </div>
            <hr class="my-4" />
            <button type="submit" class="btn btn-primary w-25 mx-1">Save</button>
            <Link to="/user" class="btn btn-secondary w-25 mx-1">Cancel</Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default UserEdit