const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const userValidate = (formData, setErrors) => {
    const err = {}

    if (formData.firstName.trim() === '') {
        err.firstName = 'You must enter a first name'
    }

    if (formData.lastName.trim() === '') {
        err.lastName = 'You must enter a last name'
    }

    if (formData.phoneNumber.trim() === '') {
        err.phoneNumber = 'You must enter a phone number'
    }

    if (formData.email.trim() === '') {
        err.email = 'You must enter an email address'
    } else if (!emailRegex.test(formData.email)) {
        err.email = 'You must enter a valid email address'
    }
    setErrors(err)

    return Object.keys(err).length < 1
}


