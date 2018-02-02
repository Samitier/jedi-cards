import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-popup',
	templateUrl: './app-popup.component.html',
	styleUrls: ['./app-popup.component.less']
})
export class AppPopupComponent {

	isOpen = false

	@Input() popupTitle: string

	openPopup() {
		this.isOpen = true
	}
}
