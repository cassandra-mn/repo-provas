import bcrypt from 'bcrypt';
import {prisma} from '../src/config/database.js';

async function main() {
    const hashedPassword = bcrypt.hashSync("admin", 10);

    await prisma.user.upsert({
        where: {email: "admin@admin.com"},
        update: {},
        create: {
            email: "admin@admin.com",
            password: hashedPassword
        }
  });
}

main().catch(e => {
    console.log(e);
    process.exit(1);
}).finally(async () => {
    await prisma.$disconnect();
})