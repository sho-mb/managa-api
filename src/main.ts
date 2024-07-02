import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const logger = new Logger();

logger.log('App Start');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.get<number>('app.port') || 3000;
  const host = configService.get<string>('app.host') || 'localhost';
  const doc = configService.get('api.doc');
  const scheme = 'http';
  const config = new DocumentBuilder()
    .setTitle('Manga librally')
    .setDescription('The manga Api')
    .setVersion('1.0')
    .addTag('mangas')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(port, host);
  logger.log(`Server is listening at ${scheme}://${host}:${port}`);
  logger.log(`Docs is exposed at ${scheme}://${host}:${port}/${doc}`);
}
bootstrap();
