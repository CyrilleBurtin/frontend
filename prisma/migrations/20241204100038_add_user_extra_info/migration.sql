/*
  Warnings:

  - Added the required column `userExtraInfoId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "userExtraInfoId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "UserExtraInfo" (
    "id" TEXT NOT NULL,
    "appliedJobs" TEXT[],
    "stack" TEXT[],
    "createdJobs" TEXT[],
    "companyId" TEXT,

    CONSTRAINT "UserExtraInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserExtraInfo_id_key" ON "UserExtraInfo"("id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userExtraInfoId_fkey" FOREIGN KEY ("userExtraInfoId") REFERENCES "UserExtraInfo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
