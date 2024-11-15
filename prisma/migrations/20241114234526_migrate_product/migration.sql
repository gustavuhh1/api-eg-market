-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "users";

-- CreateTable
CREATE TABLE "users"."CarList" (
    "id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" REAL NOT NULL,
    "user_id" UUID NOT NULL,
    "products" JSON NOT NULL,

    CONSTRAINT "CarList_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users"."Products" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "img_link" TEXT NOT NULL,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users"."Sales" (
    "id" BIGSERIAL NOT NULL,
    "consumer_id" UUID NOT NULL DEFAULT auth.uid(),
    "sold_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "products_saled" JSON[],
    "price_total" REAL NOT NULL,

    CONSTRAINT "Sales_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users"."consumers" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "consumer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users"."CarList" ADD CONSTRAINT "CarList_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"."consumers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users"."Sales" ADD CONSTRAINT "Sales_consumer_id_fkey" FOREIGN KEY ("consumer_id") REFERENCES "users"."consumers"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
