const express = require('express');
const posts = require('./posts');
const comments = require('./comments');
const tags = require('./tags');

const router = express.Router();

router.use('/posts', posts);
router.use('/comments', comments);
router.use('/tags', tags);

module.exports = router;
