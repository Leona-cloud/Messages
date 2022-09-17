import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

// Body && param are argument decorators

@Controller('messages')
export class MessagesController {

    messagesService: MessagesService;

    constructor(){
        this.messagesService = new MessagesService()
    }

    @Get() 
    listMessagges(){
        return this.messagesService.findAll();
    }

    @Get('/:id')
   async getMessage(@Param('id') id: string){
       const message = await this.messagesService.findOne(id);
       if(!message){
        throw new NotFoundException('message with specified id not found')
       };

       return message
    }

    @Post()
    createMessages(@Body() body: createMessageDto){
        return this.messagesService.create(body.content)
    }

}
