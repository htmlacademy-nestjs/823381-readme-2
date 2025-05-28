import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const APP = await NestFactory.create(AppModule);
  const GLOBAL_PREFIX = 'api';
  const DEFAULT_PORT = 3000;
  const PORT = process.env.PORT || DEFAULT_PORT;
  await APP.listen(PORT);
  APP.setGlobalPrefix(GLOBAL_PREFIX);
  Logger.log(`🚀 Application is running on: http://localhost:${PORT}/${GLOBAL_PREFIX}`);
}

bootstrap();
