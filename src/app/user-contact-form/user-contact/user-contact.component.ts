import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.scss']
})
export class UserContactComponent implements OnInit {
  @Input()
  public childForm: FormGroup;

  @Input()
  public arrayIndex: number;

  @Input()
  public contactSize: number;
  
  @Output()
  public deleteContactEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {

  }

  get name(): FormControl {
    return this.childForm.get('name') as FormControl;
  }

  get email(): FormControl {
    return this.childForm.get('email') as FormControl;``
  }

  static addUserContactItem(): FormGroup {
    return new FormGroup({
      name: new FormControl('',{validators: [Validators.required]}),
      email: new FormControl('', {validators: [Validators.required, Validators.email]}),
    });
  }

  public deleteContact(index: number): void {
    this.deleteContactEvent.emit(index);
  }


}
