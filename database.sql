CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (1000) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "active" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "vet_tech" (
	"id" SERIAL PRIMARY KEY,
	"student_id" INTEGER,
	"coe_status" VARCHAR (500),
	"comment" VARCHAR (1000),
	"last_reminder_sent_at" DATE,
	"me_form_status" VARCHAR(500)
);

CREATE TABLE "student" (
	"id" SERIAL PRIMARY KEY,
	"first_name" VARCHAR(500),
	"last_name" VARCHAR(500),
	"cohort_name" VARCHAR,
	"cohort_id" INTEGER,
	"course_name" VARCHAR(255),
	"course_id" INTEGER,
	"graduation" DATE,
	"payment_type" VARCHAR(255),
	"placed_at" DATE,
	"profile_photo" VARCHAR(1000)
);

CREATE TABLE "updates" (
	"id" SERIAL PRIMARY KEY,
	"created_at" DATE,
	"total_vet_tech" NUMERIC,
	"total_isa" NUMERIC 
);

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (1, 'Ammamaria', 'Caveill', 'Panoz', 1, 'UX', 1, '7/9/2022', 'Vet Tech', '5/13/2022');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (2, 'Elayne', 'Jeffcoate', 'Chevrolet', 2, 'Full Stack', 2, '9/21/2022', 'ISA', '10/20/2022');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (3, 'Raddy', 'Curtayne', 'Hyundai', 3, 'UX', 3, '3/10/2022', 'Vet Tech', '3/11/2022');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (4, 'Vonnie', 'Dyson', 'Porsche', 4, 'Full Stack', 4, '12/25/2021', 'ISA', '5/16/2022');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (5, 'Brigitta', 'Fasson', 'Oldsmobile', 5, 'Full Stack', 5, '9/5/2022', 'ISA', '1/23/2022');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (6, 'Tracey', 'Possel', 'Saab', 6, 'UX', 6, '12/26/2021', 'Vet Tech', '12/20/2021');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (7, 'Janine', 'Honisch', 'Aston Martin', 7, 'Full Stack', 7, '5/19/2022', 'Vet Tech', '3/7/2022');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (8, 'Uri', 'Jurisch', 'Ford', 8, 'UX', 8, '1/16/2022', 'Vet Tech', '4/12/2022');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (9, 'Bebe', 'Johantges', 'Mazda', 9, 'UX', 9, '2/4/2022', 'Vet Tech', '2/8/2022');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (10, 'Paton', 'Nossent', 'Pontiac', 10, 'Full Stack', 10, '1/17/2022', 'ISA', '6/3/2022');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (11, 'Dene', 'Reedshaw', 'Ford', 11, 'Full Stack', 11, '6/24/2022', 'Vet Tech', '9/15/2022');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (12, 'Basilius', 'Brockway', 'Ford', 12, 'Full Stack', 12, '11/3/2022', 'Vet Tech', '2/16/2022');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (13, 'Elijah', 'Martineau', 'Mercury', 13, 'Full Stack', 13, '9/17/2022', 'ISA', '8/14/2022');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (14, 'Doll', 'Finlay', 'Volkswagen', 14, 'UX', 14, '10/9/2022', 'ISA', '3/16/2022');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (15, 'Gertrudis', 'Walthall', 'GMC', 15, 'UX', 15, '8/20/2022', 'Vet Tech', '6/26/2022');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (16, 'Der', 'Rheubottom', 'Chrysler', 16, 'Full Stack', 16, '12/15/2021', 'Vet Tech', '3/12/2022');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (17, 'Nikolia', 'Jachimak', 'Isuzu', 17, 'Full Stack', 17, '3/11/2022', 'ISA', '1/19/2022');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (18, 'Rutledge', 'Josefsson', 'Acura', 18, 'Full Stack', 18, '11/2/2022', 'Vet Tech', '6/13/2022');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (19, 'Barron', 'Antic', 'Acura', 19, 'UX', 19, '5/12/2022', 'Vet Tech', '2/18/2022');

insert into student (id, first_name, last_name, cohort_name, cohort_id, course_name, course_id, graduation, payment_type, placed_at) values (20, 'Linoel', 'Mac Giany', 'Dodge', 20, 'Full Stack', 20, '4/17/2022', 'ISA', '3/2/2022');
	
	