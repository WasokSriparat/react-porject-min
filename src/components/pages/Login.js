import React from 'react'

function Login() {
  return (
    <>
      <div class="d-flex justify-content-center mt-5 pt-5">
        <div class="w-50 mt-5">
          <h1 class="text-center mb-3">Login</h1>
          <form>
            <div class="mb-4">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" required class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-4">
              <label for="exampleInputPassword1" class="form-label">Password</label>
              <input type="password" required class="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" class="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login