import { Component, OnInit, ViewChild } from '@angular/core'
import { ApiService } from '../_shared/services/api.service'
import Deck from '../_models/deck.model'
import { AppPopupComponent } from '../_shared/components/app-popup/app-popup.component';

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

	@ViewChild('deletePopup') deletePopup: AppPopupComponent

	ngOnInit() {
		this._api
			.getDecks()
			.then(d => {
				this.isLoading = false
				this.decks = d
			})
	}

	onDeleteDeck(id: string, event: MouseEvent) {
		// this._api.deleteDeck(id)
		// 	.then(() => {
		// 		const i = this.decks.findIndex(d => d.id === id)
		// 		this.decks.splice(i, 1)
		// 	})
		this.deletePopup.openPopup()
		event.stopPropagation()
	}
}
