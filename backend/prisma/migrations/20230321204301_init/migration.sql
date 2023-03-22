-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "type" CHAR(2) NOT NULL,
    "name" TEXT NOT NULL,
    "cpf_cnpj" VARCHAR(14) NOT NULL,
    "phone_number" VARCHAR(20) NOT NULL,
    "birthdate" DATE NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
