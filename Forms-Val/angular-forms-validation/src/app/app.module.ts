import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule

    ReactiveFormsModule,
    RouterModule.forRoot([
        { path: '', component: ReactiveFormComponent },
        { path: 'reactive-form', component: ReactiveFormComponent }
      ]),
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


