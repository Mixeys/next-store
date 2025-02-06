/*
  Warnings:

  - You are about to drop the column `sFeatured` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "sFeatured",
ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false;
