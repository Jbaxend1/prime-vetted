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
	"place_at" DATE,
	"profile_photo" VARCHAR(1000)
);

CREATE TABLE "updates" (
	"id" SERIAL PRIMARY KEY,
	"created_at" DATE,
	"total_vet_tech" NUMERIC,
	"total_isa" NUMERIC 
);	
	
	