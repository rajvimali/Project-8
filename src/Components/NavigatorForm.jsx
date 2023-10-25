// import React from 'react'

import React, { useEffect, useState } from 'react'
// import states from './json.json'
// import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavigatorForm = () => {
    // const CrudeOpps = () => {
    const initialInput = { email: '', password: '' }

    const [input, setInput] = useState(initialInput)
    const [errors, setErrors] = useState(initialInput)
    const [cities, setCities] = useState([])
    const [editId, setEditId] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const [data, setData] = useState(() => {
        const localData = JSON.parse(localStorage.getItem('user-data'))
        if (localData) {
            return localData
        }
        return []
    })

    useEffect(() => {
        localStorage.setItem('user-data', JSON.stringify(data))
    }, [data])

    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleOption = (e) => {
        const value = e.target.value
        const name = e.target.name

        // setInput({ ...input, [name]: value })
        // if (name === 'state') {
        //     getDistricts(value)
        // }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const verify = validate()
        if (verify.name || verify.email || verify.password) {
            setErrors(verify)
        } else {
            if (isEdit) {
                const oldData = [...data]
                oldData[editId] = input
                setData(oldData)
                setIsEdit(false)
            } else {
                setData([...data, input])
            }
            resetFields()
            e.target.reset()
        }
    }

    const resetFields = () => {
        setInput(initialInput)
        setCities([])
        setIsEdit(false)
    }

    const validate = () => {
        const errors = {}
        if (input.name.length < 1) {
            errors.name = 'Please Enter Name'
        }
        if (input.email.length < 1) {
            errors.email = 'Please Vaild Email'
        }
        if (input.password.length < 1) {
            errors.password = 'Please Enter Password'
        }
        if (input.confirmPassword.length < 1) {
            errors.confirmPassword = 'Please Enter Confirm Password'
        } else if (input.confirmPassword !== input.password) {
            errors.confirmPassword = 'Confirm Password Is Not match With Password'
        }
        if (input.mobile.length < 1) {
            errors.mobile = 'Please Enter Mobile'
        } else if (input.mobile.length !== 10) {
            errors.mobile = 'Mobile Number Not Correct'
        }
        if (input.course.length < 1) {
            errors.course = 'Please Enter Course'
        }
        if (input.gender.length < 1) {
            errors.gender = 'Select Your Gender'
        }
        // if (input.state.length < 1) {
        //     errors.state = 'Select Your State'
        // }
        // if (input.city.length < 1) {
        //     errors.city = 'Select Your City'
        // }
        if (input.hobbies.length < 1) {
            errors.hobbies = 'Please Enter Hobbies'
        }
        if (input.address.length < 1) {
            errors.address = 'Please Enter Address'
        }
        return errors
    }

    const handleEdit = (id) => {
        setInput({ ...data[id], id })
        setEditId(id)
        setIsEdit(true)
    }

    const handleDelete = (id) => {
        const oldData = [...data]
        oldData.splice(id, 1)
        setData(oldData)
    }

    // useEffect(() => {
    //     getDistricts(input.state)
    // }, [isEdit])

    // const getDistricts = (state) => {
    //     states.states.forEach(e => {
    //         if (e.state === state) {
    //             setCities(e.districts)
    //         }
    //     })
    // }

    // drop down
    // const DropDown = ({ name, input, handleOption, states }) => {
    //     return (
    //         <select name={name} className='block w-full rounded-md  py-1.5 px-3 ' value={input} onChange={handleOption} disabled={states.length < 1 ? true : false}>
    //             <option value="">-- select {name} --</option>
    //             {
    //                 states.map((state, i) => <option key={i} value={name === 'state' ? state.state : state}>{name === 'state' ? state[name] : state}</option>)
    //             }
    //         </select>
    //     )
    // }
    // table
    const Table = ({ data, handleEdit, handleDelete, isEdit }) => {
        return (

            <div className=" flex flex-wrap px-3 col">
                <table className="table striped bordered hover">
                    <thead className="text-xs  uppercase border-b dark:border-gray-700 bg-indigo-500">
                        <tr>
                            {/* <th scope="col" className="px-6 py-3 border-r border-gray-500">Name</th> */}
                            <th scope="col" className="px-6 py-3 border-r border-gray-500">Email</th>
                            <th scope="col" className="px-6 py-3 border-r border-gray-500">Password</th>
                            {/* <th scope="col" className="px-6 py-3 border-r border-gray-500">Confirm Password</th> */}
                            {/* <th scope="col" className="px-6 py-3 border-r border-gray-500">Gender</th> */}
                            {/* <th scope="col" className="px-6 py-3 border-r border-gray-500">Mobile</th> */}
                            {/* <th scope="col" className="px-6 py-3 border-r border-gray-500">Course</th> */}
                            {/* <th scope="col" className="px-6 py-3 border-r border-gray-500">State</th> */}
                            {/* <th scope="col" className="px-6 py-3 border-r border-gray-500">City</th> */}
                            {/* <th scope="col" className="px-6 py-3 border-r border-gray-500">Hobbies</th> */}
                            {/* <th scope="col" className="px-6 py-3 border-r border-gray-500">Address</th> */}
                            <th scope="col" className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e, i) =>
                            <tr className="bg-white border-b" key={i}>
                                {/* <td className="px-6 py-4 border-r ">{e.name}</td> */}
                                <td className="px-6 py-4 border-r border-gray-400">{e.email}</td>
                                <td className="px-6 py-4 border-r border-gray-400">{e.password}</td>
                                {/* <td className="px-6 py-4 border-r border-gray-400">{e.confirmPassword}</td> */}
                                {/* <td className="px-6 py-4 border-r border-gray-400">{e.gender}</td> */}
                                {/* <td className="px-6 py-4 border-r border-gray-400">{e.mobile}</td> */}
                                {/* <td className="px-6 py-4 border-r border-gray-400">{e.course}</td> */}
                                {/* <td className="px-6 py-4 border-r border-gray-400">{e.state}</td> */}
                                {/* <td className="px-6 py-4 border-r border-gray-400">{e.city}</td> */}
                                {/* <td className="px-6 py-4 border-r border-gray-400">{e.hobbies}</td> */}
                                {/* <td className="px-6 py-4  border-gray-400">{e.address}</td> */}
                                <td className="px-6 py-4 d-flex">
                                    <button className='btn btn-primary me-2' onClick={() => handleEdit(i)}>Edit</button>
                                    <button disabled={isEdit} className='btn btn-danger  ' onClick={() => handleDelete(i)}>Delete</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
    return (
        <>
            <div className="container">
                <div className=" row  ">
                    <h1 className='text-center'>Registration Form</h1>
                    <div className="col-6 mx-auto p-5 ">
                        <form className="" onSubmit={handleSubmit}>
                            <div className=''>
                                {/* <div className='mb-3'>
                                    <label htmlFor="name" className="form-label" >Name :</label>
                                    <input id="name" className='form-control' name="name" type="text" autoComplete="name" value={input.name} onChange={handleChange} />
                                    <p className='text-danger'>{errors.name}</p>
                                </div> */}

                                <div className=' md-3'>
                                    <label htmlFor="email" className="block form-label">Email Address :</label>
                                    <input id="email" name="email" type="email" placeholder='Enter Your Email' autoComplete="email" className="form-control" value={input.email} onChange={handleChange} />
                                    <p className='text-danger'>{errors.email}</p>
                                </div>

                                <div className=' md-3'>
                                    <label htmlFor="password" className="block form-label">Password :</label>
                                    <input id="password" className='form-control' name="password" placeholder='Enter Your Password' type="password" autoComplete="current-password" value={input.password} onChange={handleChange} />
                                    <p className='text-danger'>{errors.password}</p>
                                </div>


                                <div className=' mb-3'>
                                    <button type="submit" className='form-control btn bg-success border-0 text-white'>{isEdit ? 'Update' : 'Submit'}</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <Table data={data} handleEdit={handleEdit} handleDelete={handleDelete} isEdit={isEdit} />
                </div>
            </div>
        </>
    )
}

export default NavigatorForm