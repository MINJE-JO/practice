/*
  Warnings:

  - Added the required column `balance` to the `Racket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stringPattern` to the `Racket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weight` to the `Racket` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `brand` on the `Racket` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Brand" AS ENUM ('WILSON', 'BABOLAT', 'HEAD', 'YONEX');

-- CreateEnum
CREATE TYPE "StringPattern" AS ENUM ('PATTERN_16x19', 'PATTERN_16x20', 'PATTERN_18x20', 'PATTERN_14x16');

-- AlterTable
ALTER TABLE "Racket" ADD COLUMN     "balance" INTEGER NOT NULL,
ADD COLUMN     "stringPattern" "StringPattern" NOT NULL,
ADD COLUMN     "weight" INTEGER NOT NULL,
DROP COLUMN "brand",
ADD COLUMN     "brand" "Brand" NOT NULL;
