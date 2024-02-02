import { useState, useEffect } from 'react'
import { validate } from '../utils/FormValidation'

export const ContactForm = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        content: '',
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

    const [postSuccess, setPostSuccess] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        if(!validate(formData, setErrors)) {
            setErrors(err => ({
                ...err
            }))
            return
        }
        console.log(formData)
      
        const apiData = {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: formData.content,
        }
      
        try {
          const res = await fetch('https://js2-ecommerce-api.vercel.app/api/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(apiData),
          })
      
          if (res.ok) {
            console.log('Message sent successfully')
            setPostSuccess('Message sent successfully')
          } else {
            console.error('Failed to send message')
          }
        } catch (error) {
          console.error('Error while sending message', error)
        }
      }

    return (
        <div className='contact-page'>
            <form onSubmit={onSubmit} className="contact-form">
                <div className="contact-form-FLName">
                    <div className="contact-form-group">
                        <label htmlFor="firstName" className="contact-form-label">First name</label>
                        <input type="text" id='firstNameContact' name="firstName" value={formData.firstName} onChange={handleChange} className="contact-form-input" />
                        { errors.firstName && <p className='error'>{ errors.firstName }</p>}
                    </div>
                    <div className="contact-form-group">
                        <label htmlFor="lastName" className="contact-form-label">Last name</label>
                        <input type="text" id='lastNameContact' name="lastName" value={formData.lastName} onChange={handleChange} className="contact-form-input" />
                        { errors.lastName && <p className='error'>{ errors.lastName }</p>}
                    </div>
                </div>
                <div className="contact-form-group">
                    <label htmlFor="email" className="contact-form-label">Email</label>
                    <input type="text" id='emailContact' name="email" value={formData.email} onChange={handleChange} className="contact-form-input" />
                    { errors.email && <p className='error'>{ errors.email }</p>}
                </div>
                <div className="contact-form-group">
                    <label htmlFor="content" className="contact-form-label">Write your message to us</label>
                    <textarea id='contentContact' name="content" value={formData.content} onChange={handleChange} className="contact-form-input-big" />
                    { errors.content && <p className='error'>{ errors.content }</p>}
                </div>
                <button id='buttonContact' className="contact-button-btn" onClick={onSubmit}>Send</button>
            </form>

            <div className="success">
                {
                    postSuccess && <p className='success-text'>{postSuccess}</p>
                }
            </div>
        </div>
    )
}