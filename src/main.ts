import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  process.env.TZ = '03:00'; // Configurar o TZ para não dar erro ao trabalharmos com datas

  app.useGlobalPipes(new ValidationPipe()); // Habilitando o Validation para fazer a validação dos dados (@NotNull,etc)

  app.enableCors();

  await app.listen(4000);
}
bootstrap();
