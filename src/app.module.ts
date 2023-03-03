import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { I18nModule } from 'nestjs-i18n';

import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import app_config from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      load: [app_config],
      isGlobal: true,
    }),
    // {
    //   ...I18nModule.forRoot({
    //     fallbackLanguage: 'en',
    //     loaderOptions: {
    //       path: 'src/resources/i18n/',
    //       watch: true,
    //     },
    //   }),
    //   global: true,
    // },
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('POSTGRES_HOST'),
        username: config.get<string>('POSTGRES_USER'),
        password: config.get<string>('POSTGRES_PASSWORD'),
        database: config.get<string>('POSTGRES_DATABASE'),
        port: config.get<number>('POSTGRES_PORT', 10) || 5432,
        synchronize: true,
        // migrationsRun: true,
        // installExtensions: true,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        logging: true,
      }),
    }),
    UsersModule,
    RolesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
