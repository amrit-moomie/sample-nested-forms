import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserContactFormComponent } from './user-contact-form.component';
import { UserContactComponent } from './user-contact/user-contact.component';


@NgModule( {
	declarations: [
		UserContactFormComponent,
		UserContactComponent
	],
	exports: [
		UserContactFormComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule
	]
})
export class UserContactFormModule { }
