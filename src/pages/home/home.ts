import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  country: FirebaseObjectObservable<any>;
  constructor(af: AngularFire) {
    this.country = af.database.object('/countryList/colombia');
    }

}
