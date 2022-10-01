-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('NERD', 'MENTOR');

-- CreateTable
CREATE TABLE "User" (
    "uuid" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'NERD',
    "name" TEXT NOT NULL,
    "technology" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "programId" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Program" (
    "uuid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Program_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Module" (
    "uuid" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "evaluationId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Module_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Week" (
    "uuid" TEXT NOT NULL,
    "moduleId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isCompleted" BOOLEAN NOT NULL DEFAULT false,
    "challengeId" TEXT NOT NULL,

    CONSTRAINT "Week_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Challenge" (
    "uuid" TEXT NOT NULL,
    "evaluationId" TEXT NOT NULL,

    CONSTRAINT "Challenge_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Evaluation" (
    "uuid" TEXT NOT NULL,
    "weight" TEXT,
    "score" TEXT,
    "maxScore" TEXT,

    CONSTRAINT "Evaluation_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "uuid" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "userFromId" TEXT NOT NULL,
    "userToId" TEXT NOT NULL,
    "evaluationId" TEXT NOT NULL,
    "weekId" TEXT NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Theme" (
    "uuid" TEXT NOT NULL,
    "weekId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "evaluationId" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Theme_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Assignment" (
    "uuid" TEXT NOT NULL,
    "challengeId" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "evaluationId" TEXT NOT NULL,

    CONSTRAINT "Assignment_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Comment" (
    "uuid" TEXT NOT NULL,
    "feedbackId" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "_ModuleToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_ModuleToProgram" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Module_evaluationId_key" ON "Module"("evaluationId");

-- CreateIndex
CREATE UNIQUE INDEX "Week_challengeId_key" ON "Week"("challengeId");

-- CreateIndex
CREATE UNIQUE INDEX "Challenge_evaluationId_key" ON "Challenge"("evaluationId");

-- CreateIndex
CREATE UNIQUE INDEX "Theme_evaluationId_key" ON "Theme"("evaluationId");

-- CreateIndex
CREATE UNIQUE INDEX "Assignment_evaluationId_key" ON "Assignment"("evaluationId");

-- CreateIndex
CREATE UNIQUE INDEX "_ModuleToUser_AB_unique" ON "_ModuleToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ModuleToUser_B_index" ON "_ModuleToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ModuleToProgram_AB_unique" ON "_ModuleToProgram"("A", "B");

-- CreateIndex
CREATE INDEX "_ModuleToProgram_B_index" ON "_ModuleToProgram"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_programId_fkey" FOREIGN KEY ("programId") REFERENCES "Program"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "Evaluation"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Week" ADD CONSTRAINT "Week_moduleId_fkey" FOREIGN KEY ("moduleId") REFERENCES "Module"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Week" ADD CONSTRAINT "Week_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "Challenge"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Challenge" ADD CONSTRAINT "Challenge_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "Evaluation"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_userFromId_fkey" FOREIGN KEY ("userFromId") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_userToId_fkey" FOREIGN KEY ("userToId") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "Evaluation"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "Week"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Theme" ADD CONSTRAINT "Theme_weekId_fkey" FOREIGN KEY ("weekId") REFERENCES "Week"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Theme" ADD CONSTRAINT "Theme_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "Evaluation"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_challengeId_fkey" FOREIGN KEY ("challengeId") REFERENCES "Challenge"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignment" ADD CONSTRAINT "Assignment_evaluationId_fkey" FOREIGN KEY ("evaluationId") REFERENCES "Evaluation"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "Feedback"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModuleToUser" ADD CONSTRAINT "_ModuleToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Module"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModuleToUser" ADD CONSTRAINT "_ModuleToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModuleToProgram" ADD CONSTRAINT "_ModuleToProgram_A_fkey" FOREIGN KEY ("A") REFERENCES "Module"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ModuleToProgram" ADD CONSTRAINT "_ModuleToProgram_B_fkey" FOREIGN KEY ("B") REFERENCES "Program"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
