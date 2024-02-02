import { useState } from 'react'
import { paymentValidate } from '../utils/FormPaymentValidation'

export const PaymentForm = () => {
    

    const [formData, setFormData] = useState({
        cardNumber: '',
        expDate: '',
        cvc: '',
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
        if(!paymentValidate(formData, setErrors)) {
            setErrors(err => ({
                ...err
            }))
            return
        }
    }


    
    return (
    <form id='PaymentForm' onSubmit={handleSubmit} className="user-form">
        <div className="form-group">
            <label htmlFor="cardNumber" className="form-label">Card number</label>
            <input type="text" id="cardNumber" name='cardNumber' value={formData.cardNumber} onChange={handleChange} className="form-input" />
            { errors.cardNumber && <p className='error'>{ errors.cardNumber }</p>}
        </div>
        <div className="form-group">
            <label htmlFor="expDate" className="form-label">Expiry date</label>
            <input type="text" id="expDate" name='expDate' value={formData.expDate} onChange={handleChange} className="form-input" />
            { errors.expDate && <p className='error'>{ errors.expDate }</p>}
        </div>
        <div className="form-group">
            <label htmlFor="cvc" className="form-label">CVC/CVV</label>
            <input type="text" id="cvc" name='cvc' value={formData.cvc} onChange={handleChange} className="form-input" />
            { errors.cvc && <p className='error'>{ errors.cvc }</p>}
        </div>
    </form>
    )
}