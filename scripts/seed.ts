import * as dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { Salt, parseSalt } from "../src/auth/password.service";
import { hash } from "bcrypt";
import { customSeed } from "./customSeed";

if (require.main === module) {
  dotenv.config();

  const { BCRYPT_SALT } = process.env;

  if (!BCRYPT_SALT) {
    throw new Error("BCRYPT_SALT environment variable must be defined");
  }

  const salt = parseSalt(BCRYPT_SALT);

  seed(salt).catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

async function seed(bcryptSalt: Salt) {
  console.info("Seeding database...");

  const client = new PrismaClient();
  const data = {
    username: "admin",
    password: await hash("admin", bcryptSalt),
    roles: ["user"],
  };
  // TODO: Make more SECURITY rhobust (M - SR)
  const devUsers = [
    {
      username: "admin",
      password: await hash("admin", bcryptSalt),
      roles: ["user"],
    },
    {
      firstName: "Test",
      lastName: "Usr1",
      username: "test-user-1",
      password: await hash("testuser1", bcryptSalt),
      roles: ["user"],
    },
    {
      firstName: "Test",
      lastName: "Usr2",
      username: "test-user-2",
      password: await hash("testuser2", bcryptSalt),
      roles: ["user"],
    },
    {
      firstName: "Test",
      lastName: "Usr3",
      username: "test-user-3",
      password: await hash("testuser3", bcryptSalt),
      roles: ["user"],
    },
    {
      firstName: "Test",
      lastName: "Usr4",
      username: "test-user-4",
      password: await hash("testuser4", bcryptSalt),
      roles: ["doctor"],
    },
    {
      firstName: "Test",
      lastName: "Usr5",
      username: "test-user-5",
      password: await hash("testuser5", bcryptSalt),
      roles: ["doctor"],
    },
    {
      firstName: "Test",
      lastName: "Usr6",
      username: "test-user-6",
      password: await hash("testuser6", bcryptSalt),
      roles: ["user"],
    },
  ]
  await client.user.upsert({
    where: { username: data.username },
    update: {},
    create: data,
  });
  void client.$disconnect();

  console.info("Seeding database with custom seed...");
  customSeed(devUsers);

  console.info("Seeded database successfully");
}
