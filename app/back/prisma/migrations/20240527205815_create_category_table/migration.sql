/*
  Warnings:

  - You are about to drop the column `type` on the `Expenses` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Income` table. All the data in the column will be lost.
  - Added the required column `categorieId` to the `Expenses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Income` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Expenses" DROP COLUMN "type",
ADD COLUMN     "categorieId" INTEGER NOT NULL,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Income" DROP COLUMN "type",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "description" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);
