class AppController {
  // Handles GET / - returns a simple greeting
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
