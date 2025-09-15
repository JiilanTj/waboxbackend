import { PrismaClient } from '../src/generated/prisma';
import bcrypt from 'bcrypt';
import { normalizePhoneNumber } from '../src/utils/phoneUtils';

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

  // Create sample WhatsApp numbers with various input formats
  const whatsappNumbers = [
    {
      name: 'Customer Service 1',
      phoneNumber: '081234567890', // Indonesian format with 08
      isActive: true
    },
    {
      name: 'Customer Service 2', 
      phoneNumber: '+6281234567891', // International format with +
      isActive: false
    },
    {
      name: 'Sales Team',
      phoneNumber: '6281234567892', // International format without +
      isActive: true
    }
  ];

  console.log('🔄 Normalizing and creating WhatsApp numbers...');
  
  for (const waNumber of whatsappNumbers) {
    // Normalize phone number
    const normalizedPhone = normalizePhoneNumber(waNumber.phoneNumber);
    if (!normalizedPhone) {
      console.error(`❌ Invalid phone number format: ${waNumber.phoneNumber}`);
      continue;
    }

    console.log(`📱 ${waNumber.phoneNumber} -> ${normalizedPhone}`);

    await prisma.whatsAppNumber.upsert({
      where: { phoneNumber: normalizedPhone },
      update: {},
      create: {
        ...waNumber,
        phoneNumber: normalizedPhone
      }
    });
  }

  console.log('🔄 Creating sample WhatsApp sessions...');

  // Get the created WhatsApp numbers
  const createdNumbers = await prisma.whatsAppNumber.findMany();

  // Sample session data
  const sampleSessions = [
    {
      whatsappNumberId: createdNumbers[0].id,
      status: 'PENDING' as const,
      isActive: true,
      qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8/5+hHgAHggJ/PchI7wAAAABJRU5ErkJggg==', // Sample base64 QR
      connectionInfo: {
        device: 'WaBox Client',
        platform: 'web',
        userAgent: 'Mozilla/5.0 (compatible; WaBox/1.0)',
      }
    },
    {
      whatsappNumberId: createdNumbers[1].id,
      status: 'CONNECTED' as const,
      isActive: true,
      lastConnected: new Date(),
      sessionData: {
        creds: 'encrypted_session_data',
        keys: 'encrypted_keys_data'
      },
      connectionInfo: {
        device: 'WaBox Client',
        platform: 'web',
        userAgent: 'Mozilla/5.0 (compatible; WaBox/1.0)',
        connectedAt: new Date().toISOString()
      }
    },
    {
      whatsappNumberId: createdNumbers[2].id,
      status: 'DISCONNECTED' as const,
      isActive: false,
      lastConnected: new Date(Date.now() - 86400000), // 1 day ago
      errorMessage: 'Connection timeout',
      connectionInfo: {
        device: 'WaBox Client',
        platform: 'web',
        lastError: 'TIMEOUT',
        disconnectedAt: new Date().toISOString()
      }
    }
  ];

  for (const sessionData of sampleSessions) {
    // Check if session already exists for this WhatsApp number
    const existingSession = await prisma.whatsAppSession.findFirst({
      where: { 
        whatsappNumberId: sessionData.whatsappNumberId,
        isActive: true 
      }
    });

    if (!existingSession) {
      await prisma.whatsAppSession.create({
        data: sessionData
      });
    }
  }

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
  
  console.log('\n� Sample WhatsApp Numbers created');
  console.log('\n�🔑 Login Credentials:');
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
