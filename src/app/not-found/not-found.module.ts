import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { NotFoundComponent } from './not-found.component'
import { RouterModule } from '@angular/router'

@NgModule({
	imports: [
		RouterModule.forChild([
			{ path: '', component: NotFoundComponent },
		]),
		CommonModule
	],
	declarations: [
		NotFoundComponent
	]
})
export class NotFoundModule { }
