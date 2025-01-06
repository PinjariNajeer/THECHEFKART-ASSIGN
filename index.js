// const express = require('express');
// const app = express();

// app.use(express.json());

// app.get('/', (req, res) => {
//     res.send("Hello World! My name is Najeer Bashaaaaaa");
// });

// app.listen(3000, () => {
//     console.log("listening on server 3000")
// })



// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const { sequelize } = require('./models');
// const routes = require('./routes');

// const app = express();
// app.use(bodyParser.json());
// app.use('/api', routes);

// const PORT = process.env.PORT || 3000;
// sequelize.sync().then(() => {
//   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// });




require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize, User, Post } = require('./models');
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);

// Start Server
const PORT = process.env.PORT || 3000;
(async () => {
  try {
    await sequelize.sync({ force: false }); // Use `force: true` for development to reset DB
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();