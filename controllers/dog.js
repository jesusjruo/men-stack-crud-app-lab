const express = require('express');
const Dog = require('../models/dog');

const router = express.Router();

// create a landing page

router.get('/dogs', async (req, res) => {
    try {
        let dogs = await Dog.find({});
        res.render('landing.ejs', { dogs: dogs })

    } catch (err) {
        res.status(400).json(err);
    }
});

// create a new page
// create a new page ejs
router.get('/dog/new', (req, res) => {
    res.render('new.ejs');
})

router.get('/dog/:id', async (req, res) => {
    try {
        const selectedDog = await Dog.findById(req.params.id);
        res.render('details.ejs' , {data: selectedDog});
    } catch (err) {
        res.status(400).json(err);
    }
})

router.post('/dog',async (req, res) => {
    await Dog.create(req.body);
    res.redirect('/dogs');
});

router.delete('/dog/:id', async (req, res) => {
    try {
        await Dog.findByIdAndDelete(req.params.id);
        res.redirect('/dogs');
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/dog/:id', async (req, res) => {
    try {
        await Dog.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/dogs');
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;