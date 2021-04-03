const { Router } = require('express');

// Handles requests made to /api/posts
const postsRouter = Router();

// Respond to a GET request to the /api/posts route:
postsRouter.get('/', (req, res) => res.send('Got a GET request at /api/posts'));

// Respond to a PUT request to the /api/posts route:
postsRouter.put('/', (req, res) => res.send('Got a PUT request at /api/posts'));

// Respond to a DELETE request to the /api/posts route:
postsRouter.delete('/', (req, res) => res.send('Got a DELETE request at /api/posts'));

module.exports = {
  postsRouter,
};