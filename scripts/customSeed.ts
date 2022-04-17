import { PrismaClient } from "@prisma/client";

// TODO: Make more SECURITY rhobust (M - SR)

export async function customSeed(devUsers: any) {
  const client = new PrismaClient();

  for (const user of devUsers) {
    
    await client.user.upsert({
      where: { username: user.username },
      update: {},
      create: user,
    });
    console.info(`Added  ${user.username} ...`);

  }

  client.$disconnect();

}
