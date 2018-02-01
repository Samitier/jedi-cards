import { Component } from '@angular/core'
import { ApiService } from '../_shared/_services/api.service'
import { Router } from '@angular/router'

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.less']
})
export class LoginComponent {

	private readonly decksUrl = '/decks'
	readonly minLengthPassword = 6

	email = ''
	password = ''

	isLoading = false

	constructor(
		private _api: ApiService,
		private _router: Router
	) {}

	onSend() {
		this.isLoading = true
		this._api
			.login(this.email, this.password)
			.then(response => {
				this.isLoading = false
				this._router.navigateByUrl(this.decksUrl)
			})
			.catch(error => {
				console.log(error)
				this.isLoading = false
			})
	}

	isPasswordCorrect() {
		return this.password.length >= this.minLengthPassword
	}

}
