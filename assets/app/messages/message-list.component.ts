import {Component} from "@angular/core";
import {Message} from "./message.model";


@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html'

})

export class MessageListComponent{
    messages:Message[] =[
        new Message('message1', 'user1'),
        new Message('message2', 'user2'),        
    ];
}