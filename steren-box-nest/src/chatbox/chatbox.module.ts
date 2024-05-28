import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChatboxController } from './chatbox.controller';
import { ChatboxService } from './chatbox.service';
import { ChatboxProducts } from './entities/chatboxProducts.entity';
 

@Module({
  imports: [TypeOrmModule.forFeature([ChatboxProducts])],
  controllers: [ChatboxController],
  providers: [ChatboxService],
})
export class ChatboxModule {}
