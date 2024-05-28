import { Module } from '@nestjs/common';
import { ChatboxModule } from './chatbox/chatbox.module';
import { TypeOrmModule } from "@nestjs/typeorm";


@Module({
  imports: [ChatboxModule,
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5436,
      username: "dev",
      password: "dev",
      database: "db_crud",
      autoLoadEntities: true,
      synchronize: true,
    }),

  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
