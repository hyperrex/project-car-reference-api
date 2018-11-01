const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

const photosRoutes = require('./src/routes/photos_routes.js');
const projectsRoutes = require('./src/routes/projects_routes.js');
const usersRoutes = require('./src/routes/users_routes.js');

app.use('/photos', photosRoutes);
app.use('/projects', projectsRoutes);
app.use('/users', usersRoutes);

/**** Error Handling ****/
app.all('*', (req, res, next) => res.sendStatus(404));

app.use((err, req, res, next) => {
  res.status(err.status).json(err);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`She may not look like much but she's got it where it counts on port ${port}!`);
  });
}

module.exports = app;
