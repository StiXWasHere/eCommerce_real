import contactMessage from '../schemas/messageSchema.js'

export const PostMessage = async (req, res) => {
    try {
        const { name, email, message} = req.body

        if(!name || !email || !message) {
            res.status(400).json('You need to enter all fields')
            throw new Error('You need to enter all fields')
        }

        const Message = await contactMessage.create({name, email, message})
        res.status(200).json(Message)
        console.log('Message sent')
    } catch (err) {
        res.status(400).json('Something went wrong')
        throw new Error ('Something went wrong')
    }
}