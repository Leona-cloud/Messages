import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { createMessageDto } from './dtos/create-message.dto';

// Body && param are argument decorators

@Controller('messages')
export class MessagesController {
    @Get() 
    listMessagges(){
 
    }

    @Get('/:id')
    getMessage(@Param('id') id: string){
        console.log(id);
    }

    @Post()
    createMessages(@Body() body: createMessageDto){
        console.log(body)
    }

}
