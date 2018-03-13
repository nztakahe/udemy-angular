import {Component} from "@angular/core";

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageImportComponent{
    onSave(value: string) {
        console.log(value);
 }

}