const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  // we're connected!
  console.log("Connected to the database");
});

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  comments: [String],
  date: { type: Date, default: Date.now },
});

const Users = mongoose.model("Users", userSchema);

const testUser = new Users({
  name: "User",
  password: "test",
  email: "test@test.com",
  comments: ["Comment 1", "Comment 2", "Comment 3", "Comment 4"],
});

module.exports = Users;

// LOAD DB BELOW
// testUser.save(function (err) {
//   if (err) return console.error(err);
//   console.log("DB saved");
// });
