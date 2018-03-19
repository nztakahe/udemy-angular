import {Component, OnInit} from "@angular/core";
import {Message} from "./message.model";
import {MessageService} from "./message.service";
import {NgForm, FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
//    providers: [MessageService]
})

export class MessageImportComponent {
    constructor(private messageService: MessageService){}

    onSubmit(form: NgForm) {
        console.log(form);
        const msg = new Message(form.value.content, "newmsguser");
        this.messageService.addMessage(msg);
        form.resetForm();
    }

/* implements OnInit - check minimum length
    ngOnInit(): void {
        let t = new FormControl(this.msg, [Validators.required, Validators.minLength(2)]);
    }
*/
}