const { Router } = require('express');
const { usersRouter } = require('./users');
const { postsRouter } = require('./posts');
const { messagesRouter } = require('./messages');

const apiRouter = Router();

apiRouter.use('/users', usersRouter);
apiRouter.use('/posts', postsRouter);
apiRouter.use('/messages', messagesRouter);


module.exports = {
  apiRouter,
};