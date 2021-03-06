import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { DirectivesModule } from '../directives/directives.module';
import { ComponentsModule } from '../components/components.module';
import { ImagePicker } from '@ionic-native/image-picker';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { ExplorePage } from '../pages/explore/explore';
import { WelcomePage } from '../pages/welcome/welcome';
import { MatchedPage } from '../pages/matched/matched';
import { MePage } from '../pages/me/me';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileEditPage } from '../pages/profile-edit/profile-edit';
import { InstagramPhotoPage } from '../pages/instagram-photo/instagram-photo';
import { SettingsPage } from '../pages/settings/settings' ;
import { MessagingPage } from '../pages/messaging/messaging';
import { ChatPage } from '../pages/chat/chat';
import { TinderPlusPage } from '../pages/tinder-plus/tinder-plus';
import { UserLogin } from '../pages/user-login/user-login';
import { UserSignup } from '../pages/user-signup/user-signup';
import { UserForgotpassword } from '../pages/user-forgotpassword/user-forgotpassword';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { SwingModule } from 'angular2-swing';
import { ElasticModule } from 'ng-elastic';
import { AuthService } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    ExplorePage,
    WelcomePage,
    MatchedPage,
    MePage,
    ProfilePage,
    ProfileEditPage,
    InstagramPhotoPage,
    SettingsPage,
    MessagingPage,
    ChatPage,
    TinderPlusPage,
    UserLogin,
    UserSignup,
    UserForgotpassword
  ],
  imports: [
    BrowserModule,
    SwingModule,
    ElasticModule,
    HttpModule,
    HttpClientModule,
    DirectivesModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',// TODO: to have same iOS look for all platforms
      backButtonText: '',
    }),
    IonicStorageModule.forRoot(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ExplorePage,
    WelcomePage,
    MatchedPage,
    MePage,
    ProfilePage,
    ProfileEditPage,
    InstagramPhotoPage,
    SettingsPage,
    MessagingPage,
    ChatPage,
    TinderPlusPage,
    UserLogin,
    UserSignup,
    UserForgotpassword
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
