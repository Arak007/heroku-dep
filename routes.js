const express = require("express");
const app = express();

// Importing the routes
const blogRoutes = require("./routes/notes");
const authorRoutes = require("./routes/authors");

const sessionRoutes = require("./routes/sessions");

// Registering our routes
app.use("/notes", blogRoutes);
app.use("/authors", authorRoutes);
app.use("/", sessionRoutes);

// Exporting the changes
module.exports = app;