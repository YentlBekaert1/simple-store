import { Component, OnInit, Input } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { AppState } from '../state/app.state';
import { updateResort } from '../state/resort.actions';
import { Resort } from '../state/resort.model';
import { getResortById } from '../state/resort.selector';

@Component({
  selector: 'app-edit-resort-component',
  templateUrl: './edit-resort-component.component.html',
  styleUrls: ['./edit-resort-component.component.css']
})
export class EditResortComponentComponent implements OnInit {

  resort!: Resort;
  id : string | null= "";
  postForm! : FormGroup;
  postSubscription!: Subscription;

constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router){
}

ngOnInit(): void {
  this.route.paramMap.subscribe((params) =>{
      this.id = params.get('id');
      this.postSubscription = this.store.select(getResortById(this.id)).subscribe((data) => {
        this.resort = data!;
        console.log(this.resort);
        this.createForm();
      })
  });
}
createForm(){
  this.postForm = new FormGroup({
    name: new FormControl(this.resort.name,  {
      validators: [
         Validators.required,
         Validators.minLength(1)
      ]}),
    lat: new FormControl(this.resort.lat,  {
      validators: [
         Validators.required,
         Validators.minLength(1)
      ]}),
    lng: new FormControl(this.resort.lng,  {
      validators: [
         Validators.required,
         Validators.minLength(1)
      ]}),
    status: new FormControl(this.resort.status,  {
      validators: [
          Validators.required,
          Validators.minLength(1)
      ]}),
    url: new FormControl(this.resort.url,  {
      validators: [
          Validators.required,
           Validators.minLength(1)
      ]}),
  });
}

ngOnDestroy(){
  if(this.postSubscription){
    this.postSubscription.unsubscribe();
  }
}

submitHandler(){
  console.log(this.postForm.value);
  if(this.postForm.status == 'VALID'){
    console.log("valid");
    const name = this.postForm.value.name;
    const lat = this.postForm.value.lat;
    const lng = this.postForm.value.lng;
    const status = this.postForm.value.status;
    const url = this.postForm.value.url;

    const resort: Resort = {
      id: this.id!,
      name:name,
      lat:lat,
      lng:lng,
      status:status,
      url:url,

    }
    //dispatch action
    this.store.dispatch(updateResort({ resort }))
    this.router.navigate(['/']);
  }else{
    return;
  }
}
}
