import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { UserContactComponent } from './user-contact/user-contact.component';


@Component({
	selector: 'app-user-contact-form',
	templateUrl: './user-contact-form.component.html',
	styleUrls: ['./user-contact-form.component.scss']
})
export class UserContactFormComponent implements OnInit {
	public userContactForm: FormGroup;
	constructor () { }

	ngOnInit (): void {
		this.generateUserContactForm();
	 }

	 get conctactFormArray(): FormArray {
		return this.userContactForm?.get('contacts') as FormArray;
	}
	
	public generateUserContactForm (): void {
		this.userContactForm = new FormGroup( {
			contacts: new FormArray(
				[
					UserContactComponent.addUserContactItem()
				]
			)
		});
	}

	public submitUserContactForm (): void {
		console.log( this.userContactForm.value ); 
		console.log( this.userContactForm.get('contacts').value );
	}

	public addUserContactItem(): void {
		this.conctactFormArray.push( UserContactComponent.addUserContactItem() );
	}

	public deleteContact(index: number): void {
		this.conctactFormArray?.removeAt( index );
	}

}
