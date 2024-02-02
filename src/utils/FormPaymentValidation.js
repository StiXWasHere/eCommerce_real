
export const paymentValidate = (formData, setErrors) => {
    const err = {}

    if (formData.cardNumber.trim() === '') {
        err.cardNumber = 'You must enter a card number';
    } else if (formData.cardNumber.length < 15) {
        err.cardNumber = 'A card number should contain 16 numbers'
    }
    
    if (formData.expDate.trim() === '') {
        err.expDate = 'You must enter an expiry date';
    } else if (formData.expDate.length < 4) {
        err.expDate = 'Please use this format: 01/01'
    }
    
    if (formData.cvc.trim() === '') {
        err.cvc = 'You must enter a CVC/CVV'
    } else if (formData.cvc.length !== 3) {
        err.cvc = 'Your CVC/CVV should contain 3 numbers'
    }
    setErrors(err)

    return Object.keys(err).length < 1
}


