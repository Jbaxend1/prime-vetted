const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

// GET by student id

router.get('/:id', (req, res) => {

    if (req.isAuthenticated()) {
        const query = `SELECT * FROM "student" WHERE "id" = $1;`;
    
        pool.query(query, [req.params.id, req.user.id])
          .then(result => {
            res.send(result.rows[0]);
          })
          .catch((error) => {
            console.log(error);
            res.sendStatus(500);
          });
      } else {
        res.sendStatus(403) // Forbidden
      }
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;