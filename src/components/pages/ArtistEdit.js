import React from 'react'
import { Link } from "react-router-dom";

function ArtistEdit() {
  return (
    <>
       <div class="d-flex justify-content-center">
                <div class="w-50">
                    <h1 class="mb-3">Edit Artist</h1>
                    <hr />
                    <form>
                        <div class="mb-2">
                            <label class="form-label">Artist ID</label>
                            <input type="text" required class="form-control" disabled />
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Artist Name</label>
                            <input type="text" required class="form-control" />
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Artist Picture</label>
                            <input type="password" required class="form-control" />
                        </div>
                        <div class="mb-2">
                                <label class="form-label">Date of Birth</label>
                                <input type="date" required class="form-control" />
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Artist Description</label>
                            <input type="text" required class="form-control" />
                        </div>
                        <hr class="my-4" />
                        <button type="submit" class="btn btn-success w-25 mx-1">Save</button>
                        <Link to="/artist" class="btn btn-secondary w-25 mx-1">Cancel</Link>
                    </form>
                </div>
            </div>
    </>
  )
}

export default ArtistEdit