const express = require('express');
const app = express();
require("dotenv").config()
const db = require("./config/db")
app.use(express.json());

const userModel = require("./models/User")
// const movieModel = require("./models/Movie")

const uservalidator = require("./validators/userValidator") 


app.post('/api/user', async (req, res) => {
  try {
    const validationResult = uservalidator(req.body)
    if(validationResult === true){
      const { name, family, age, email, mbtiType, username, password, favoriteGenres, watchlist, isAdmin } = req.body;

      const newUser = new userModel({
        name,
        family,
        age,
        email,
        mbtiType,
        username,
        password,
        favoriteGenres,
        watchlist,
        isAdmin
      });

      await newUser.save();

      res.status(201).json({ message: "User added successfully!", user: newUser });
    }else{
      res.status(422).json(validationResult)
    }
    
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding user", error: err.message });
  }
});

// app.post('/api/movie', async (req, res) => {
//   try {
//     const { title , description , director , cast , releaseDate , duration , stars , genre , country } = req.body;

//     const newMovie = new movieModel({
//       title,
//       description,
//       director,
//       cast,
//       releaseDate,
//       duration,
//       stars,
//       genre,
//       country,

//     });

//     await newMovie.save();

//     res.status(201).json({ message: "Movie added successfully!", user: newMovie });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error adding Movie", error: err.message });
//   }
// });

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
