import React from 'react';


const Form = (props) => {
    const { change, values, submit } = props

    const onChange = evt => {
        const { name, value } = evt.target
        change(name,value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }


    return(
        <form onSubmit={onSubmit}>
            
            <label>Name: 
                <input 
                name='name' 
                type='text' 
                onChange={onChange}
                value={values.name}
                placeholder='Name'
                />
            </label>

            <label>Email: 
                <input 
                name='email' 
                type='email' 
                onChange={onChange}
                value={values.email}
                placeholder='Email'
                />
            </label>

            <label>Role
                <select name='role' value={values.role} onChange={onChange}>
                    <option value="">-- select role --</option>
                    <option value="instructor">Instructor</option>
                    <option value="student">Student</option>
                    <option value="tl">Team Lead</option>
                </select>
            </label>

            <button disabled={!values.name || !values.email || !values.role}>Submit</button>

        </form>
    )
}

export default Form