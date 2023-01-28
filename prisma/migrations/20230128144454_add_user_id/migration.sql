-- CreateTable
CREATE TABLE "humor" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "mood" TEXT,
    "activities" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "humor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "analysis" (
    "id" SERIAL NOT NULL,
    "howtochange" TEXT,
    "humorwhy" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "analysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "humor_date_key" ON "humor"("date");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "humor" ADD CONSTRAINT "humor_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "analysis" ADD CONSTRAINT "analysis_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
