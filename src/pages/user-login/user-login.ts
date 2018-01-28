import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage, NavParams} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Database } from '../../providers/tinder-2'
import { ExplorePage } from '../explore/explore';
import { UserSignup } from '../user-signup/user-signup';
import { UserForgotpassword } from '../user-forgotpassword/user-forgotpassword';

@IonicPage()
@Component({
  selector: 'page-user-login',
  templateUrl: 'user-login.html',
  providers: [Database],
})
export class UserLogin {

  loading: Loading;
  registerCredentials = { email: '', password: '' };

  constructor(public navCtrl: NavController,private db: Database, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public navParams: NavParams, public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserLogin');
  }

  public login() {
    this.showLoading()
    this.navCtrl.setRoot(ExplorePage);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  signupPage(){ this.navCtrl.push(UserSignup); }
  forgotPasswordPage(){ this.navCtrl.push(UserForgotpassword); }

}
