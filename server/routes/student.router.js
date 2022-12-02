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
    const queryText = `SELECT "student"."first_name", "student"."last_name", "student"."cohort_name", "student"."placed_at", "vet_tech"."coe_status", "vet_tech"."me_form_status" FROM "student"
    JOIN "vet_tech" ON "student"."id" = "vet_tech"."student_id";`;
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
        const query = `SELECT "student"."profile_photo", "student"."first_name", "student"."last_name", "student"."cohort_name", "student"."placed_at", "vet_tech"."me_form_status", "vet_tech"."coe_status", "vet_tech"."comment", "vet_tech"."last_reminder_sent_at" FROM "student"
        JOIN "vet_tech" ON "student"."id" = "vet_tech"."student_id"
        WHERE "student"."id" = '3';`;
    
        pool.query(query, [req.params.id])
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