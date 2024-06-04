import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const contact = await prisma.contact.create({
  data: {
    name: "Angger Nur Amin",
    email: "anggern514@gmail.com",
    phone: "0896543210",
  },
});
console.log("🚀 ~ contact:", contact);
