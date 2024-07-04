import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MangaModule } from './manga/manga.module';
import { LibsModule } from 'libs/modules/libs.modules';
import { ConfigModule, ConfigService } from '@nestjs/config';
import applicationConfig from 'config/application';
import { GenresModule } from './genres/genres.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [applicationConfig],
    }),
    LibsModule,
    MangaModule,
    GenresModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APP_CONFIG',
      useFactory: (configService: ConfigService) => ({
        port: configService.get<number>('app.port'),
        host: configService.get<string>('app.host'),
        doc: configService.get<string>('api.doc'),
      }),
      inject: [ConfigService],
    },
  ],
})
export class AppModule {}
