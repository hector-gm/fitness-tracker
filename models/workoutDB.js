const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: String,
    type: String,
    weight: Number,
    sets: Number,
    reps: Number,
    duration: Number,
    distance: Number,
});

const sessionSchema = new Schema ({
    day: {
        type: Date,
        default: Date.now(),
    },
    totalDailyDuration: {
        type: Number,
        default: 0,
    },
    exercises: [exerciseSchema],
});

const WorkoutDB = mongoose.model('Workout', sessionSchema);

module.exports = { WorkoutDB};