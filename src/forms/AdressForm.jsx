import { useState } from 'react'

export const AdressForm = () => {

    const [formData, setFormData] = useState({
        street: '',
        postalCode: '',
        city: '',
        country: '',
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
            <label htmlFor="street" className="form-label">Street</label>
            <input type="text" id="street" name='street' value={formData.street} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
            <label htmlFor="postalCode" className="form-label">Postal code</label>
            <input type="text" id="postalCode" name='postalCode' value={formData.postalCode} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" id="city" name='city' value={formData.city} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
            <label htmlFor="country" className="form-label">Country</label>
            <input type="text" id="country" name='country' value={formData.country} onChange={handleChange} className="form-input" />
        </div>
    </form>
    )
}