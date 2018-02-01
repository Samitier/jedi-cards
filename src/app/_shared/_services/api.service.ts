import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import User from '../../_models/user.model'
import { Router } from '@angular/router'
import { AuthService } from './auth.service'
import Deck from '../../_models/deck.model'

@Injectable()
export class ApiService {

	private readonly loginUrl = '/login'
	private readonly apiUrl = '/api/'

	constructor(
		private _http: HttpClient,
		private _router: Router,
		private _auth: AuthService,
	) {}

	signin(user: User): Promise<any> {
		return this._http.post(this.apiUrl + 'auth/signin', user).toPromise()
	}

	login(email: string, password: string): Promise<any> {
		return this._http.post(
			this.apiUrl + 'auth/login',
			{ email, password }
		).toPromise()
	}

	getDecks(): Promise<any> {
		return this._http.get(this.apiUrl + 'decks')
			.toPromise()
			.catch(e => this.handleError(e))
	}

	getDeck(id: string): Promise<any> {
		return this._http.get(this.apiUrl + 'decks/' + id)
			.toPromise()
			.catch(e => this.handleError(e))
	}

	deleteDeck(id: string): Promise<any> {
		return this._http.delete(this.apiUrl + 'decks/' + id)
			.toPromise()
			.catch(e => this.handleError(e))
	}

	putDeck(deck: Deck) {
		return this._http.put(this.apiUrl + 'decks/' + deck.id, deck)
		.toPromise()
		.catch(e => this.handleError(e))
	}

	postDeck(deck: Deck) {
		return this._http.post(this.apiUrl + 'decks', deck)
		.toPromise()
		.catch(e => this.handleError(e))
	}

	private handleError(e) {
		if (e.status === 401) {
			this._auth.logout()
			this._router.navigateByUrl(this.loginUrl)
		}
	}
}
