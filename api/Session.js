const express = require('express');
const { Session } = require('../models/Sessions');

const router = express.Router();
router.get('/sessions', async (req, res) => {
    const { userId } = req.params; 
    try {
        const result = await Session.findOne({ userId });

        if(!result) {
            res.status(400).json({ message: 'user not found' });
        } else {
            res.status(200).json(result);
        }
    }catch (error){
        console.error('Error fetching session:', error);
        throw new Error("something went wrong");
    }
});

module.exports = router; 