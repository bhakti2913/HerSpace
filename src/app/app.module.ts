import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFirestoreModule} from '@angular/fire/compat/firestore';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
// import {environment } from 'src/environments/environment';
// import { GoogleAuthProvider} from '@angular/fire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';
import { FootComponent } from './foot/foot.component';
import { BlogComponent } from './blog/blog.component';
import { MoodtrackerComponent } from './moodtracker/moodtracker.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ForumComponent } from './forum/forum.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { PerioddateComponent } from './perioddate/perioddate.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { AuthService } from './services/auth.service';
// import { FormGroup, FormControl } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SigninComponent,
    FootComponent,
    BlogComponent,
    ForumComponent,
    MoodtrackerComponent,
    ProductComponent,
    YoutubeComponent,
    PerioddateComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule, 
    // provideFirebaseApp(() => initializeApp(environment.firebase)), provideAnalytics(() => getAnalytics()), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage()),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    // GoogleAuthProvider,
  ],
  providers: [
    ScreenTrackingService,UserTrackingService,AuthService
    // GoogleAuthProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
 }
