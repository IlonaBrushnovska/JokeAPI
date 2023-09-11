import express from "express";
import axios from "axios";


const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev";


app.use(express.static("public")) 

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "Waiting for data..." });
});

// Get programming jokes from API_URL with restrictions of racist and religious topics.

app.post("/get-programmig-joke", async (req, res) => {
  
  try {
    const result = await axios.get(API_URL + "/joke/Programming?blacklistFlags=religious,racist");
    res.render("index.ejs", { content: JSON.stringify(result.data.joke) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

// Get dark jokes from API_URL with restrictions of racist and religious topics.

app.post("/get-dark-joke", async (req, res) => {
  
  try {
    const result = await axios.get(API_URL + "/joke/Dark?blacklistFlags=religious,racist");
    res.render("index.ejs", { content: JSON.stringify(result.data.joke) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

// Get pun jokes from API_URL with restrictions of racist and religious topics.

app.post("/get-pun-joke", async (req, res) => {
  
  try {
    const result = await axios.get(API_URL + "/joke/Pun?blacklistFlags=religious,racist");
    res.render("index.ejs", { content: JSON.stringify(result.data.joke) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});

// Get christmas jokes from API_URL with restrictions of racist and religious topics.

app.post("/get-christmas-joke", async (req, res) => {
  
  try {
    const result = await axios.get(API_URL + "/joke/Christmas?blacklistFlags=religious,racist");
    res.render("index.ejs", { content: JSON.stringify(result.data.joke) });
  } catch (error) {
    res.render("index.ejs", { content: JSON.stringify(error.response.data) });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
