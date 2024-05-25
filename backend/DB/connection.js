const mongoose = require('mongoose');

mongoose.connect(process.env.mongodb_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to DB");
})
.catch((err) => {
    console.error("Connection error:", err);
});
