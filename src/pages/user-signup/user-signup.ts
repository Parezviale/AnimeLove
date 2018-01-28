import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading, IonicPage, NavParams} from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

import { ExplorePage } from '../explore/explore';
import { UserLogin } from '../user-login/user-login';
import { UserForgotpassword } from '../user-forgotpassword/user-forgotpassword';

@IonicPage()
@Component({
  selector: 'page-user-signup',
  templateUrl: 'user-signup.html',
})
export class UserSignup {

  loading: Loading;
  registerCredentials = { email: '', password: '' };

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private loadingCtrl: LoadingController, public navParams: NavParams) {
  }

  public createAccount() {
    this.navCtrl.push(ExplorePage);
  }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        this.nav.setRoot('HomePage');
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSignup');
  }

  explorePage(){ this.navCtrl.push(ExplorePage); }
  loginPage(){ this.navCtrl.push(UserLogin);}
  forgotPasswordPage(){ this.navCtrl.push(UserForgotpassword);}

}
