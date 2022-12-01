const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('student GET route');
  if (req.isAuthenticated()) {
    const queryText = `SELECT * FROM "student"`;
    pool.query(queryText).then((result) => {
      res.send(result.rows);
    }).catch((error) => {
      console.log(error);
      alert('Something went wrong in student GET');
      res.sendStatus(500);
    });
  } else {
    res.sendStatus(403);
  }
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
  console.log('student comment POST route');
  console.log(req.body);
  if (req.isAuthenticated()) {
    const queryText = `INSERT INTO "vet_tech" ("comment")
                       VALUES ($1)`;
    pool.query(queryText, [req.body.comment]).then(() => {
      res.sendStatus(201);
    }).catch((error) => {
      console.log(error);
      alert('Something went wrong in vet_tech POST');
      res.sendStatus(500)
    });
  } else {
    res.sendStatus(403); 
  }
});

module.exports = router;