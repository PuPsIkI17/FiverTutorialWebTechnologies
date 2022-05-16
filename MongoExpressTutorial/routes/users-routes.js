
const User = require('../models/users')
const Document = require('../models/documents')

addUser = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }

    const user = new User(body)

    if (!user) {
        return res.status(400).json({ success: false, error: err })
    }

    user
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'User created',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'User not created!',
            })
        })
}

viewUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, data: users })
    }).clone().catch(err => console.log(err))
}


addDocument = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user',
        })
    }

    const document = new Document(body)

    if (!document) {
        return res.status(400).json({ success: false, error: err })
    }

    document
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                message: 'Document added',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Document was not added!',
            })
        })
}

viewDocuments = async (req, res) => {
    await Document.find({}, (err, users) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, data: users })
    }).clone().catch(err => console.log(err))
}


module.exports = {
    addUser,
    viewUsers,
    addDocument,
    viewDocuments
}