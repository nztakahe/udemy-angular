import {Component, OnInit} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service"

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html'

})

export class MessageListComponent implements OnInit{
    constructor(private messageService:MessageService){}

    messages:Message[] =[
        new Message('message1', 'user1'),
        new Message('message2', 'user2'),        
    ];

    ngOnInit(){
        this.messages = this.messageService.getMessages();
    }
}