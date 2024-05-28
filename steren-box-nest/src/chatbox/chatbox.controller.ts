import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatboxService } from './chatbox.service';
import { CreateChatboxDto } from './dto/create-chatbox.dto';
import { UpdateChatboxDto } from './dto/update-chatbox.dto';

@Controller('chatbox')
export class ChatboxController {
  constructor(private readonly chatboxService: ChatboxService) {}

  @Post()
  create(@Body() createChatboxDto: CreateChatboxDto) {
    return this.chatboxService.create(createChatboxDto);
  }

  @Get()
  findAll() {
    return this.chatboxService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatboxService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatboxDto: UpdateChatboxDto) {
    return this.chatboxService.update(+id, updateChatboxDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatboxService.remove(+id);
  }
}
