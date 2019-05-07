import { AboutModule } from './modules/about/about.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { TaskModule } from './modules/task/task.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
  ],
  imports: [
    // Angular Module
    BrowserModule,
    HttpClientModule,

    // App Module
    AppRoutingModule,
    AboutModule,
    TaskModule,

    // Must Have Modules
    CoreModule,
    SharedModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
