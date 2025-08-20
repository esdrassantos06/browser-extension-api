# Browser Extension API

A RESTful API built with NestJS for managing browser extensions. This API provides endpoints to create, read, update, delete, and manage the activation status of browser extensions.

## 🚀 Features

- **CRUD Operations**: Full Create, Read, Update, Delete functionality for extensions
- **Activation Management**: Activate/deactivate extensions with dedicated endpoints
- **Database Integration**: PostgreSQL database with Prisma ORM
- **Type Safety**: Built with TypeScript for better development experience
- **Testing**: Comprehensive test suite with Jest
- **Docker Support**: Easy development setup with Docker Compose

## 🛠️ Tech Stack

- **Framework**: [NestJS](https://nestjs.com/) - Progressive Node.js framework
- **Database**: PostgreSQL with [Prisma](https://www.prisma.io/) ORM
- **Language**: TypeScript
- **Testing**: Jest
- **Containerization**: Docker & Docker Compose

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database
- Docker (optional, for local development)

## 🚀 Quick Start

### Option 1: Using Docker (Recommended)

1. **Clone the repository**

   ```bash
   git clone https://github.com/esdrassantos06/browser-extension-api
   cd browser-extension-api
   ```

2. **Start the database with Docker**

   ```bash
   docker-compose up -d
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your database configuration:

   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres"
   PORT=3000
   ```

5. **Run database migrations and seed data**

   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

6. **Start the development server**
   ```bash
   npm run start:dev
   ```

### Option 2: Local Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up your PostgreSQL database**

3. **Configure environment variables**

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your database configuration.

4. **Run database migrations and seed data**

   ```bash
   npx prisma migrate dev
   npx prisma db seed
   ```

5. **Start the development server**
   ```bash
   npm run start:dev
   ```

## 📚 API Documentation

The API will be available at `http://localhost:3000`

### Endpoints

#### Extensions

| Method   | Endpoint                     | Description             |
| -------- | ---------------------------- | ----------------------- |
| `GET`    | `/extensions`                | Get all extensions      |
| `GET`    | `/extensions/:id`            | Get extension by ID     |
| `POST`   | `/extensions`                | Create a new extension  |
| `PATCH`  | `/extensions/:id`            | Update an extension     |
| `DELETE` | `/extensions/:id`            | Delete an extension     |
| `PATCH`  | `/extensions/:id/activate`   | Activate an extension   |
| `PATCH`  | `/extensions/:id/deactivate` | Deactivate an extension |

### Request/Response Examples

#### Create Extension

```bash
POST /extensions
Content-Type: application/json

{
  "name": "AdBlock Plus",
  "description": "Blocks unwanted advertisements and pop-ups"
}
```

#### Get All Extensions

```bash
GET /extensions
```

Response:

```json
[
  {
    "id": "uuid",
    "name": "AdBlock Plus",
    "description": "Blocks unwanted advertisements and pop-ups",
    "active": false,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

#### Activate Extension

```bash
PATCH /extensions/:id/activate
```

## 🧪 Testing

```bash
# Unit tests
npm run test

# Test coverage
npm run test:cov

# E2E tests
npm run test:e2e

# Watch mode
npm run test:watch
```

## 🏗️ Project Structure

```
src/
├── extensions/           # Extensions module
│   ├── extensions.controller.ts
│   ├── extensions.service.ts
│   ├── extensions.module.ts
│   └── *.spec.ts        # Test files
├── database/            # Database module
│   ├── database.service.ts
│   ├── database.module.ts
│   └── *.spec.ts        # Test files
├── app.controller.ts    # Main app controller
├── app.service.ts       # Main app service
├── app.module.ts        # Root module
└── main.ts             # Application entry point

prisma/
├── schema.prisma       # Database schema
├── seed.ts            # Database seeder
└── migrations/        # Database migrations

generated/             # Generated Prisma client
```

## 🗄️ Database Schema

The application uses a simple `Extension` model:

```prisma
model Extension {
  id          String   @id @default(uuid())
  name        String
  description String?
  active      Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## 📝 Available Scripts

```bash
# Development
npm run start:dev      # Start in watch mode
npm run start:debug    # Start in debug mode

# Production
npm run build         # Build the application
npm run start:prod    # Start in production mode

# Database
npx prisma generate   # Generate Prisma client
npx prisma migrate dev # Run migrations
npx prisma db seed    # Seed the database

# Code Quality
npm run lint          # Run ESLint
npm run format        # Format code with Prettier

# Testing
npm run test          # Run unit tests
npm run test:cov      # Run tests with coverage
npm run test:e2e      # Run E2E tests
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
PORT=3000
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Esdras Santos**

## 🆘 Support

If you encounter any issues or have questions, please open an issue on GitHub.
