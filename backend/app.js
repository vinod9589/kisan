const jsonServer = require("json-server");
const path = require("path");
const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
const { v4: uuidv4 } = require("uuid");
const cors =require("cors")
app.use(cors({origin:"http://localhost:5173"}))

app.use(jsonServer.bodyParser);
app.use(async (req, res, next) => {
  if ((req.method === "POST") & (req.path === "/signup/signup")) {
    let db = require("./db.json");
    delete require.cache[require.resolve("./db.json")];
    db = require("./db.json");
    try {
      const user =
        (await db.signup.filter((i) => i.email === req.body.email)[0]) || null;
      if (user) {
        if (user.password === req.body.password) {
          res.status(200).json({
            data: user,
            message: "ok",
            msg: "check",
          });
        } else {
          res.status(200).json({
            message: "wrong password",
          })
        }
      } else {
        res.status(200).json({
          message: "invalid user",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).send("server error");
    }
  } else if (req.method === "POST") {
    try {
      req.body.id = uuidv4();
      next();
    } catch (err) {
      console.log(err);
      res.status(500).send("server error");
    }
  } else {
    next();
  }
  // Continue to JSON Server router
});

app.use(middlewares);
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("PORT listining at 5000");
});
