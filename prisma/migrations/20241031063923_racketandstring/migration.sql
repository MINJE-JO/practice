/*
  Warnings:

  - Added the required column `stiffness` to the `RacketDB` table without a default value. This is not possible if the table is not empty.
  - Added the required column `swingweight` to the `RacketDB` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "RacketDB" ADD COLUMN     "stiffness" INTEGER NOT NULL,
ADD COLUMN     "swingweight" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "StringDB" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" "Brand" NOT NULL,
    "gauge" INTEGER NOT NULL,
    "shape" TEXT NOT NULL,
    "firmness" TEXT NOT NULL,
    "durability" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "StringDB_pkey" PRIMARY KEY ("id")
);
