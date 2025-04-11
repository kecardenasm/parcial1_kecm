import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe, VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  app.enableVersioning({ type: VersioningType.URI, defaultVersion: '1' });
  app.enableCors()

  const config = new DocumentBuilder()
    .setTitle('API Rest Personas - SIS257') // A cambiar si es necesario
    .setDescription('API Rest Personas - SIS257') // A cambiar si es necesario
    .setVersion('1.0')
    .addTag('presonas')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('apidoc', app, documentFactory);


  await app.listen(process.env.PORT ?? '' ); //Antes de .env 3000 luego ''
  console.log(`App corriendo en ${await app.getUrl()}/apidoc`);
}
bootstrap();
