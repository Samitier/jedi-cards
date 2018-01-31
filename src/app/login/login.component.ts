import { Component } from '@angular/core'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.less']
})
export class LoginComponent {

	readonly minLengthPassword = 6

	email = ''
	password = ''

	onSend() {
		console.log(this.email, this.password);
	}

	isPasswordCorrect() {
		return this.password.length >= this.minLengthPassword
	}

}
