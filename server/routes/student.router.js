const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET homepage student list

router.get('/', (req, res) => {

  console.log('student GET route');

  if (req.isAuthenticated()) {
    const queryText = `SELECT "student"."first_name", "student"."last_name", "student"."cohort_name", "student"."placed_at", "vet_tech"."coe_status", "vet_tech"."me_form_status" FROM "vet_tech"
    FULL OUTER JOIN "student" ON "vet_tech"."student_id" = "student"."id";`;
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

// GET for Vet-tech Filter

router.get('/vet-tech', (req, res) => {
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
})


// GET Student details by id

router.get('/:id', (req, res) => {

    if (req.isAuthenticated()) {
        const query = `SELECT "student"."profile_photo", "student"."first_name", "student"."last_name", "student"."cohort_name", "student"."placed_at", "vet_tech"."me_form_status", "vet_tech"."coe_status", "vet_tech"."comment", "vet_tech"."last_reminder_sent_at" FROM "student"
        JOIN "vet_tech" ON "student"."id" = "vet_tech"."student_id"
        WHERE "student"."id" = $1;`;
    
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

// POST route for Comments

router.post('/:id', (req, res) => {
  // POST route code here
  console.log('student comment POST route');
  console.log(req.body);
  if (req.isAuthenticated()) {
    const queryText = `INSERT INTO "vet_tech" ("comment")
                       VALUES ($1)
                       WHERE "student_id" = $2;`;
    pool.query(queryText, [req.body.comment, req.params.id]).then(() => {
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

// PUT for Editing Vet-Tech Data

router.put('/:id', (req, res) => {
    if (req.isAuthenticated()) {

        const query = `UPDATE "vet_tech" SET "comment" = $1, "coe_status" = $2, "last_reminder_sent_at" = $3 "me_form_status" = $4
                       WHERE "student_id" = $5;`;
        
        pool.query(query, [req.body.comment, req.body.coe, req.body.reminder, req.body.me, req.params.id])
            .then(results => {
                res.sendStatus(200);
            }).catch( error => {
                console.log(error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403) // Forbidden
    }
})

// DELETE for comments

module.exports = router;