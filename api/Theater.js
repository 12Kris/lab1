const express = require('express');
const { Theater } = require('../models/Theaters');

const router = express.Router();

router.get('/theaters/:theaterId', async (req, res) => {
  const { theaterId } = req.params;

  try {
    const result = await Theater.findOne({ theaterId });

    if(!result) {
      throw new Error ("theather id not found")
    }

    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching theater:', error);
    throw new Error ("something went wrong");
  }
});

module.exports = router;