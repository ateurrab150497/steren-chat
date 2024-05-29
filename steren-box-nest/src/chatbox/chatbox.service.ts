import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChatboxDto } from './dto/create-chatbox.dto';
import { UpdateChatboxDto } from './dto/update-chatbox.dto';
import { ChatboxProducts } from './entities/chatboxProducts.entity';

@Injectable()
export class ChatboxService {
  constructor(
    @InjectRepository(ChatboxProducts)
    private chatProductsRepository: Repository<ChatboxProducts>,
  ){}
  
  async create(createChatboxDto: CreateChatboxDto) {
    return await this.chatProductsRepository.save(createChatboxDto)
  }

  async findAll() {
    return  await this.chatProductsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} chatbox`;
  }

  update(id: number, updateChatboxDto: UpdateChatboxDto) {
    return `This action updates a #${id} chatbox`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatbox`;
  }
}
