import { PrismaClient } from "@prisma/client";
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

async function seed() {
  const email = "nika@gmail.com";
  const firstName = "Berenika";
  const lastName = "Ahmetaj";

  // clean up the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {});

  const hashedPassword = await bcrypt.hash("thisisfun", 10);

  const user = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  });
}

seed()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
