const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validate = (formData, setErrors) => {
    const err = {}

    if (formData.firstName.trim() === '') {
        err.firstName = 'You must enter a first name'
    }

    if (formData.lastName.trim() === '') {
        err.lastName = 'You must enter a last name'
    }

    if (formData.content.trim() === '') {
        err.content = 'Your message cannot be empty'
    } else if (formData.content.length < 25) {
        err.content = 'Your message must contain at least 26 characters'
    }

    if (formData.email.trim() === '') {
        err.email = 'You must enter an email address'
    } else if (!emailRegex.test(formData.email)) {
        err.email = 'You must enter a valid email address'
    }
    setErrors(err)

    return Object.keys(err).length < 1
}


