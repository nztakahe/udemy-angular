import {Component} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service"

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
//    providers: [MessageService]
})

export class MessageImportComponent{
    constructor(private messageService: MessageService){}

    onSave(value: string) {
        console.log(value);
        let msg = new Message(value, "newmsguser");
        this.messageService.addMessage(msg);
        
    }

}