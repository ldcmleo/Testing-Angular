import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms"

@Component ({
    selector: 'custom-form',
    standalone: true,
    templateUrl: './custom-form.component.html',
    styleUrl: './custom-form.component.css',
    imports: [FormsModule]
})
export class CustomForm {
    name = '';
    email = '';

    logValue() {
        console.log("escribiste el nombre:" + this.name);
        console.log("escribiste el correo:" + this.email);
    }
}