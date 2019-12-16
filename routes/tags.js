const express = require('express');
const posts = require('./posts');
const fakeTags = require('../data/tags');

const router = express.Router();

// Get a list of tags
router.get('/', (req, res) => {
  res.json(fakeTags);
});

// Get a single tag
router.get('/:tagId', (req, res) => {
  // Find the tag in the array that has the id given by req.params.tagId

  const tagId = Number(req.params.id);
  const foundtag = fakeTags.find((tag) => tag.id === tagId);
  if (!foundtag) {
    return res.status(404).json({
      error: 'tag not found',
    });
  }
  return res.json(foundtag);
});

router.use('/:tagId/posts', posts);

module.exports = router;
