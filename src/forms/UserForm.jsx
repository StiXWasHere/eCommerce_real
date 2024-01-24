import { useState } from 'react'

export const UserForm = () => {


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(formData)
    }

    const handleChange = (e) => {
        setFormData(data => {
            return {
                ...data,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <form onSubmit={handleSubmit} className="user-form">
            <div className="form-group">
                <label htmlFor="firstName" className="form-label">First name</label>
                <input type="text" id="firstName" name='firstName' value={formData.firstName} onChange={handleChange} className="form-input" />
            </div>
            <div className="form-group">
                <label htmlFor="lastName" className="form-label">Last name</label>
                <input type="text" id="lastName" name='lastName' value={formData.lastName} onChange={handleChange} className="form-input" />
            </div>
            <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" id="email" name='email' value={formData.email} onChange={handleChange} className="form-input" />
            </div>
            <div className="form-group">
                <label htmlFor="phoneNumber" className="form-label">Phone number</label>
                <input type="text" id="phoneNumber" name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} className="form-input" />
            </div>
        </form>

    )
}