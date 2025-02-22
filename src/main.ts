import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://recipegenerator-production-ba58.up.railway.app/recipes',
              'http://localhost:4200',
            ] // Replace with your frontend URL
  });
  await app.listen(3000);
}
bootstrap(); 
