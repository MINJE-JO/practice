/*
  Warnings:

  - You are about to drop the column `image` on the `Racket` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Racket` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Racket" DROP COLUMN "image",
DROP COLUMN "price";
