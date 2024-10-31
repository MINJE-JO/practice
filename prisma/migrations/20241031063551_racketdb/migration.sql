-- CreateEnum
CREATE TYPE "Brand" AS ENUM ('WILSON', 'BABOLAT', 'HEAD', 'YONEX');

-- CreateEnum
CREATE TYPE "StringPattern" AS ENUM ('PATTERN_16x19', 'PATTERN_16x20', 'PATTERN_18x20', 'PATTERN_14x16');

-- CreateTable
CREATE TABLE "RacketDB" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" "Brand" NOT NULL,
    "weight" INTEGER NOT NULL,
    "stringPattern" "StringPattern" NOT NULL,
    "balance" INTEGER NOT NULL,
    "headsize" INTEGER NOT NULL,

    CONSTRAINT "RacketDB_pkey" PRIMARY KEY ("id")
);
