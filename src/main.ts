import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { apiReference } from '@scalar/nestjs-api-reference';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Browser Extension API')
    .setDescription('API for managing browser extensions')
    .setVersion('1.0.1')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, documentFactory);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  app.use(express.json({ limit: '10kb' }));

  app.use(
    helmet({
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': ["'self'", 'https://cdn.jsdelivr.net'],
          'style-src': [
            "'self'",
            'https://cdn.jsdelivr.net',
            "'unsafe-inline'",
          ],
        },
      },
    }),
  );

  app.use(
    '/reference',
    apiReference({
      url: '/docs-json',
      theme: 'laserwave',
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then(() => {
    console.log(
      `Server is running on: http://localhost:${process.env.PORT ?? 3000} 🚀`,
    );
    console.log(
      `🔗 Swagger Documentation is running on: http://localhost:${process.env.PORT ?? 3000}/docs`,
    );
    console.log(
      `🔗 Scalar Documentation is running on: http://localhost:${process.env.PORT ?? 3000}/reference`,
    );
  })
  .catch((error) => {
    console.error(error);
  });
