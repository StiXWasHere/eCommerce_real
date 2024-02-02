import { useState } from 'react'
import { adressValidate } from '../utils/FormAdressValidation'

export const AdressForm = () => {

    const [formData, setFormData] = useState({
        street: '',
        postalCode: '',
        city: '',
        country: '',
    })

    const [errors, setErrors] = useState({})
        
    const handleChange = (e) => {
        setFormData(data => {
            return {
                ...data,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!adressValidate(formData, setErrors)) {
            setErrors(err => ({
                ...err
            }))
            return
        }
    }



    return (
        <form id='AdressForm' onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
            <label htmlFor="street" className="form-label">Street</label>
            <input type="text" id="street" name='street' value={formData.street} onChange={handleChange} className="form-input" />
            { errors.street && <p className='error'>{ errors.street }</p>}
        </div>
        <div className="form-group">
            <label htmlFor="postalCode" className="form-label">Postal code</label>
            <input type="text" id="postalCode" name='postalCode' value={formData.postalCode} onChange={handleChange} className="form-input" />
            { errors.postalCode && <p className='error'>{ errors.postalCode }</p>}
        </div>
        <div className="form-group">
            <label htmlFor="city" className="form-label">City</label>
            <input type="text" id="city" name='city' value={formData.city} onChange={handleChange} className="form-input" />
            { errors.city && <p className='error'>{ errors.city }</p>}
        </div>
        <div className="form-group">
            <label htmlFor="country" className="form-label">Country</label>
            <input type="text" id="country" name='country' value={formData.country} onChange={handleChange} className="form-input" />
            { errors.country && <p className='error'>{ errors.country }</p>}
        </div>
    </form>
    )
}