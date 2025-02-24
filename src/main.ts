import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://recipe-generator-frontend-xi.vercel.app',
              'http://localhost:4200',
              'http://localhost:4201'
            ] // Replace with your frontend URL
  });
  await app.listen(3000);
}
bootstrap(); 
