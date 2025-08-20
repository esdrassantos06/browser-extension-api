import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      name: 'Browser Extension API',
      version: '1.0.1',
      description:
        'A RESTful API developed with NestJS for managing browser extensions, similar to the Chrome Web Store.',
      features: [
        'Complete CRUD operations for extensions (create, list, search, update, delete)',
        'Extension activation and deactivation',
        'Persistent storage with PostgreSQL',
        'RESTful API with standardized endpoints',
      ],
      endpoints: {
        'GET /extensions': 'List all extensions',
        'GET /extensions/:id': 'Get a specific extension',
        'POST /extensions': 'Create a new extension',
        'PATCH /extensions/:id': 'Update an extension',
        'DELETE /extensions/:id': 'Remove an extension',
        'PATCH /extensions/:id/activate': 'Activate an extension',
        'PATCH /extensions/:id/deactivate': 'Deactivate an extension',
      },
      technologies: [
        'NestJS (Node.js framework)',
        'Prisma (ORM)',
        'PostgreSQL (Database)',
        'TypeScript',
      ],
      purpose:
        'This API serves as a backend for a browser extension management system, allowing frontend applications to consume and manage extensions efficiently and scalably.',
    };
  }
}
