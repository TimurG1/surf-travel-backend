const app = require("./server");

const post = process.env.PORT || 3000;

app.listen(post, () => {
  console.log("Server is running on http://localhost:3000");
});
