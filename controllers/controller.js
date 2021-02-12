const db = require('../models/workoutDB');

module.exports = {
    getWorkout: (req, res) => {
      // Check if there is no id specified in the URL
      !req.query.id
        ? // Then get all workouts
          db.Workout.find({})
            .then((allWorkouts) => res.send(allWorkouts))
            .catch((err) => res.send(err))
        : // Otherwise, get the workout with the mentioned id in the url
          db.Workout.findById(req.query.id)
            .then((foundWorkout) => res.send(foundWorkout))
            .catch((err) => res.send(err));
    },
  
    // Find the workout by its ID, then push an exercise into its 'exercises' array
    addExercise: async (req, res) => {
      try {
        // set a variable to easily access the current workout
        const workout = await db.Workout.findById(req.params.id);
  
        // push the new exercise to the workout entry
        workout.exercises.push(req.body);
  
        // A forEach loop reads the duration of each exercise and adds them up for our total
        let totalDailyDuration = 0;
        await workout.exercises.forEach((exercise) => {
          totalDailyDuration += exercise.duration;
        });
  
        // Assigns the variable to the object key's value
        workout.totalDailyDuration = totalDailyDuration;
  
        // Saves the workout with the new exercise in its array
        await workout.save();
  
        // Sends data so the request doesn't hang up
        res.send(workout);
      } catch (error) {
        res.send(error);
      }
    },
  
    // Creates a new empty workout entry
    newWorkout: (req, res) => {
      db.Workout.create(req.body)
        .then((workout) => {
          res.send(workout);
        })
        .catch((err) => {
          res.json(err);
        });
    },
  };
  