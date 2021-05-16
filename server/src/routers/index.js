const express = require('express');

const userRouter = require('./userRouter');
const contestRouter = require('./contestRouter');
const chatRouter = require('./chatRouter');
const offerRouter = require('./offerRouter');
const router = express.Router();


router.use('/users', userRouter);
router.use('/contests', contestRouter);
router.use('/chat', chatRouter);
router.use('/offers', offerRouter);
module.exports = router;
