import { Component, OnInit } from '@angular/core'
import { ApiService } from '../_shared/_services/api.service'
import Deck from '../_models/deck.model'

@Component({
	selector: 'app-decks',
	templateUrl: './decks.component.html',
	styleUrls: ['./decks.component.less']
})
export class DecksComponent implements OnInit {

	decks: Deck[] = []
	isLoading = true

	constructor(
		private _api: ApiService
	) {}

	ngOnInit() {
		this._api
			.getDecks()
			.then(d => {
				this.isLoading = false
				this.decks = d
			})
	}

	onDeleteDeck(id: string, event: MouseEvent) {
		this._api.deleteDeck(id)
			.then(() => {
				const i = this.decks.findIndex(d => d.id === id)
				this.decks.splice(i, 1)
			})
		event.stopPropagation()
	}
}
