import { PrismaClient } from '../src/generated/prisma';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create admin user
  const adminPassword = 'admin123';
  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  const adminUser = await prisma.user.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      name: 'Admin User',
      username: 'admin',
      email: 'admin@wabox.com',
      role: 'ADMIN',
      password: hashedPassword
    }
  });

  // Create sample regular user
  const userPassword = 'user123';
  const hashedUserPassword = await bcrypt.hash(userPassword, 12);

  const sampleUser = await prisma.user.upsert({
    where: { username: 'user1' },
    update: {},
    create: {
      name: 'Sample User',
      username: 'user1',
      email: 'user@wabox.com',
      role: 'USER',
      password: hashedUserPassword
    }
  });

  console.log('✅ Database seeded successfully!');
  console.log('👤 Admin User:', {
    id: adminUser.id,
    username: adminUser.username,
    email: adminUser.email,
    role: adminUser.role
  });
  console.log('👤 Sample User:', {
    id: sampleUser.id,
    username: sampleUser.username,
    email: sampleUser.email,
    role: sampleUser.role
  });
  
  console.log('\n🔑 Login Credentials:');
  console.log('Admin: admin / admin123');
  console.log('User: user1 / user123');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
