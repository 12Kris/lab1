const Router = require('express');
const router = Router();
const {User} = require('../models/Users')

router.get('/users', async (req, res) => {
    try {
        const {
            name,
            email
        } = req.query

        console.info('#', { name, email });

        const result = await User.find({
            name,
            email
        })
        if (!result) {
            throw new Error("user not found")
        }
        res.status(200).json(result)
    } catch (e) {
        throw new Error("something went wrong")
    }
});

module.exports = router