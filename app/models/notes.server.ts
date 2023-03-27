import { prisma } from "../utils/db.server";

export function getNote({ id, userId }: { id: string; userId: string }) {
  return prisma.note.findMany({
    select: { id: true, body: true, title: true },
    where: { id, userId },
  });
}

export function getNoteListItems({ userId }: { userId: string }) {
  return prisma.note.findMany({
    where: { userId },
    select: { id: true, title: true },
    orderBy: { updatedAt: "desc" },
  });
}

type BodyAndTitleAndUserId = {
  body: string; title: string; userId: string;
}

export function createNote({ body, title, userId }: BodyAndTitleAndUserId) {
  return prisma.note.create({
    data: {
      title,
      body,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deleteNote({ id, userId }: { id: string; userId: string }) {
  return prisma.note.deleteMany({
    where: { id, userId },
  });
}

export function hello({ name, age }: { name: string; age?: number }) {
  if (age) {
    console.log(`hello ${name}, you are ${age } years old!`)
  } else {
    console.log(`hello ${name}`)
  }
}







