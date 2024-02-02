

export const adressValidate = (formData, setErrors) => {
    const err = {}

    if (formData.street.trim() === '') {
        err.street = 'You must enter a street';
    }
    
    if (formData.postalCode.trim() === '') {
        err.postalCode = 'You must enter a postal code';
    }
    
    if (formData.city.trim() === '') {
        err.city = 'You must enter a city';
    }
    
    if (formData.country.trim() === '') {
        err.country = 'You must enter a country';
    }
    setErrors(err)

    return Object.keys(err).length < 1
}


