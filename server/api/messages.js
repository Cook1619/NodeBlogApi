const { Router } = require('express');

// Handles requests made to /api/messages
const messagesRouter = Router();

// Respond to a GET request to the /api/messages route:
messagesRouter.get('/', (req, res) => res.send('Got a GET request at /api/messages'));

// Respond to a PUT request to the /api/messages route:
messagesRouter.put('/', (req, res) => res.send('Got a PUT request at /api/messages'));

// Respond to a DELETE request to the /api/messages route:
messagesRouter.delete('/', (req, res) => res.send('Got a DELETE request at /api/messages'));

module.exports = {
  messagesRouter,
};