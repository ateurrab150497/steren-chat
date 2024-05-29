import { Module } from '@nestjs/common';
import { ChatboxModule } from './chatbox/chatbox.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ 
    ConfigModule.forRoot({isGlobal: true,}),
    ChatboxModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
