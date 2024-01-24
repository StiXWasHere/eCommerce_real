import { useState } from 'react'

export const PaymentForm = () => {
    

    const [formData, setFormData] = useState({
        cardNumber: '',
        expDate: '',
        cvc: '',
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
            <label htmlFor="cardNumber" className="form-label">Card number</label>
            <input type="text" id="cardNumber" name='cardNumber' value={formData.cardNumber} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
            <label htmlFor="expDate" className="form-label">Expiry date</label>
            <input type="text" id="expDate" name='expDate' value={formData.expDate} onChange={handleChange} className="form-input" />
        </div>
        <div className="form-group">
            <label htmlFor="cvc" className="form-label">CVC/CVV</label>
            <input type="text" id="cvc" name='cvc' value={formData.cvc} onChange={handleChange} className="form-input" />
        </div>
    </form>
    )
}