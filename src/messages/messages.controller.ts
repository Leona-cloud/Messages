import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

    @Get()
    listMessagges(){
 
    }

    @Get('/:id')
    getMessage(){
        
    }

    @Post()
    createMessages(){

    }

}
