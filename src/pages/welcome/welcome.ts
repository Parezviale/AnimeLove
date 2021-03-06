import { Component, ViewChild, Inject } from '@angular/core';
import { IonicPage, NavController, Slides, NavParams, App } from 'ionic-angular';
import { Database } from '../../providers/tinder-2'
import { UserLogin } from '../user-login/user-login';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
  providers: [Database],
})
export class WelcomePage {
  introSlides: any;
  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, public storage: Storage, public db: Database) {
    this.introSlides = [
      {
        title: 'Discover new and interesting <br> anime',
        image: 'assets/img/intro/intro_1.png'
      },
      {
        title: 'Swipe Right to like an anime <br /> or Swipe Left to dislike',
        image: 'assets/img/intro/intro_2.png'
      },
      {
        title: 'Based on your likes <br /> we find new "Matches!"',
        image: 'assets/img/intro/intro_3.png'
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    this.db.getShows().then((data) => {
    console.log(data);
     });
  }

  goToAuth() {
    this.app.getRootNav().setRoot(UserLogin)
      .then(() => {
        console.log('Welcome to your AuthPage!');
      })
  }

}
