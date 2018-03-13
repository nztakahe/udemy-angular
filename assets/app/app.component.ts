"use strict";
import { Component } from '@angular/core';
import { MessageService} from "./messages/message.service"

import {Message} from "./messages/message.model";

@Component({
    providers: [MessageService],   
    selector: 'my-app',
    templateUrl: './app.component.html'
})

export class AppComponent {
    //message: Message = new Message('Constructed Message', 'Constructed User');
}