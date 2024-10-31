-- CreateTable
CREATE TABLE "Racket" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Racket_pkey" PRIMARY KEY ("id")
);
