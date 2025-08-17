const express = require('express');
const app = express();
require("dotenv").config()
const db = require("./config/db")
app.use(express.json());
const userModel = require("./models/User")

app.post('/api/user', async (req, res) => {
  try {
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
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding user", error: err.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
