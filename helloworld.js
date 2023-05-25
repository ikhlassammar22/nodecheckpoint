console.log("HELLO WORLD");
import { createServer } from "http";
const server = createServer(function (req, res) {
  res.end("<h1>Hello Node!!!!</h1>");
});
server.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
