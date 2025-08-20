import { Prisma, PrismaClient } from '../generated/prisma';
import { withAccelerate } from '@prisma/extension-accelerate';

// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-call
const prisma = new PrismaClient().$extends(withAccelerate());

const extensionsList: Prisma.ExtensionCreateInput[] = [
  {
    name: 'AdBlock Plus',
    description:
      'Blocks unwanted advertisements and pop-ups to provide a cleaner browsing experience',
  },
  {
    name: 'Dark Reader',
    description:
      'Automatically applies dark themes to websites to reduce eye strain and save battery',
  },
  {
    name: 'Grammarly',
    description:
      'Checks spelling, grammar, and writing style to improve your text across the web',
  },
  {
    name: 'LastPass',
    description:
      'Secure password manager that stores and autofills your passwords across websites',
  },
  {
    name: 'uBlock Origin',
    description:
      'Advanced ad blocker and privacy protection tool with extensive filtering capabilities',
  },
  {
    name: 'Honey',
    description:
      'Automatically finds and applies coupon codes and discounts when shopping online',
  },
  {
    name: 'React Developer Tools',
    description:
      'Browser extension for debugging React applications and inspecting component hierarchy',
  },
  {
    name: 'Momentum',
    description:
      'Beautiful new tab page with to-do lists, weather, and productivity features',
  },
  {
    name: 'Pocket',
    description:
      'Save articles, videos, and web pages to read later across all your devices',
  },
  {
    name: 'Evernote Web Clipper',
    description:
      'Save web content directly to Evernote for organization and note-taking',
  },
  {
    name: 'Bitwarden',
    description:
      'Open-source password manager with secure vault and cross-platform synchronization',
  },
  {
    name: 'Stylus',
    description:
      'Customize website appearance with user-created themes and CSS modifications',
  },
  {
    name: 'Tampermonkey',
    description:
      'User script manager that allows you to run custom JavaScript on websites',
  },
  {
    name: 'Ghostery',
    description:
      'Privacy protection tool that blocks trackers and provides detailed privacy insights',
  },
  {
    name: 'NoScript',
    description:
      'Security-focused extension that blocks JavaScript, Java, and other executable content',
  },
  {
    name: 'Tree Style Tab',
    description:
      'Organizes browser tabs in a hierarchical tree structure for better tab management',
  },
  {
    name: 'Video DownloadHelper',
    description:
      'Downloads videos from various websites and streaming platforms',
  },
  {
    name: 'HTTPS Everywhere',
    description:
      'Forces websites to use secure HTTPS connections when available for enhanced security',
  },
];

async function main() {
  for (const extension of extensionsList) {
    await prisma.extension.create({
      data: extension,
    });
    console.log(`Created extension: ${extension.name}`);
  }
  console.log('All extensions created');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
