//  Call on Express' router to render the correct html files held in the Public folder

const router = require('express').Router();
const path = require('path');

//  Landing page route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//  Route to get and render our exercise.html file
router.get('/exercise', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

//  Route to get and render our stats.html file
router.get('/stats', (req,res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;