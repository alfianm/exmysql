module.exports = (app) => {
  const posts = require("../controllers/post.controller");

  let router = require("express").Router();

  // create a new post
  router.post("/", posts.create);

  // Retrieve all post
  router.get("/", posts.findAll);

  // Retrieve all post
  router.get("/published", posts.findAllPublished);

  // Retrieve published post
  router.get("/:id", posts.findOne);

  //   update
  router.put("/:id", posts.update);

  //   delete
  router.delete("/:id", posts.delete);

  router.delete("/", posts.deleteAll);

  app.use("/api/posts", router);
};
