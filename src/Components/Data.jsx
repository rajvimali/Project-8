import React from 'react'

const Data = ({ list, handleEdit, handleDelete }) => {
    return (
        <table className="table">
            <thead className='table-primary table table-bordered border-primary table-striped'>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Confirm Password</th>
                    <th scope="col">Number</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Hobby</th>
                    <th scope="col">Address</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {list.map((e, i) => {
                    return (
                        <tr key={i}>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.password}</td>
                            <td>{e.confirmpassword}</td>
                            <td>{e.number}</td>
                            <td>{e.degree}</td>
                            <td>{e.gender}</td>
                            <td>{e.hobby}</td>
                            <td>{e.address}</td>
                            <td>
                                <button className='btn btn-primary me-2' onClick={() => handleEdit(i)}>Edit</button>
                                <button className='btn btn-danger' onClick={() => handleDelete(i)}>Delete</button>
                            </td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    )
}

export default Data