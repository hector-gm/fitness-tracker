const express = require('express');
const app = express();

const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes');

app.use(htmlRoutes, apiRoutes);

app.listen(PORT, () => console.log(`App listening at: http://localhost:${PORT}`));