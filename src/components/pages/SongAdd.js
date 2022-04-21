import React from 'react'
import { Link } from "react-router-dom";

function SongAdd() {
    return (
        <>
            <div class="d-flex justify-content-center">
                <div class="w-50">
                    <h1 class="mb-3">Add Song</h1>
                    <hr />
                    <form>
                        <div class="mb-2">
                            <label class="form-label">Song ID</label>
                            <input type="text" required class="form-control" />
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Song Name</label>
                            <input type="text" required class="form-control" />
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Song Picture</label>
                            <input type="password" required class="form-control" />
                        </div>
                        <div class="row mb-2">
                            <div class="col">
                                <label class="form-label">Song Release Date</label>
                                <input type="date" required class="form-control" />
                            </div>
                            <div class="col">
                                <label class="form-label">Artist</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-2">
                            <label class="form-label">Song Desc</label>
                            <input type="text" required class="form-control" />
                        </div>
                        <hr class="my-4" />
                        <button type="submit" class="btn btn-success w-25 mx-1">Add</button>
                        <Link to="/song" class="btn btn-secondary w-25 mx-1">Cancel</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SongAdd