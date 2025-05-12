CREATE TABLE "users" (
	"id" uuid DEFAULT gen_random_uuid(),
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"passwordHash" varchar(255) NOT NULL,
	"image_url" varchar,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
