const getHelloWorld = (req, res) => {
  res.json({ message: "Hello World" });
};

module.exports = { getHelloWorld };
