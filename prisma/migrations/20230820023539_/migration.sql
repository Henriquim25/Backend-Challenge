-- CreateTable
CREATE TABLE "Zombies" (
    "id" SERIAL NOT NULL,
    "weapon" VARCHAR(255) NOT NULL,
    "armor" VARCHAR(255) NOT NULL,

    CONSTRAINT "Zombies_pkey" PRIMARY KEY ("id")
);
