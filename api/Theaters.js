const express = require('express');
const { Theater } = require('../models/Theaters');

const router = express.Router();

router.get('/theaters', async (req, res) => {
  try {
    const { address, zipcode, coordinates } = req.query;

    const query = {};

    if (address) {
      query.address = address;
    }

    if (zipcode) {
      query.zipcode = zipcode;
    }

    if (coordinates) {
      query.coordinates = coordinates;
    }

    const result = await Theater.find(query);

    if (result.length === 0) {
      throw new Error('No theaters found');
    }

    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching theaters:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
