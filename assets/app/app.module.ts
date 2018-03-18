import { NgModule, Input } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppComponent } from "./app.component";
import { MessageComponent} from "./messages/message.component";
import { MessageImportComponent} from "./messages/message-input.component";
import { MessageListComponent } from './messages/message-list.component';
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent} from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";
import { routing } from './app.routing'; 
import { LogoutComponent } from './auth/logout.component';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        MessageComponent,
        MessageImportComponent,
        MessageListComponent,
        MessagesComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [BrowserModule, FormsModule, routing],
    bootstrap: [AppComponent]
})
export class AppModule {

}