import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { BootsrapComponent } from './bootsrap/bootsrap.component';
import { JqueryComponent } from './jquery/jquery.component';
import { AngularComponent } from './angular/angular.component';
import { Html5tutorialComponent } from './html/html5tutorial/html5tutorial.component';
import { HtmlreferencesComponent } from './html/htmlreferences/htmlreferences.component';
import { Html5demoComponent } from './html/html5demo/html5demo.component';
import { Html5referencesComponent } from './html/html5references/html5references.component';
import { Html5toolsComponent } from './html/html5tools/html5tools.component';
import { HomeComponent } from './home/home.component';
import { WebsiteComponent } from './home/website/website.component';
import { HtmltagsComponent } from './html/htmltags/htmltags.component';
import { HtmlatributsComponent } from './html/htmlatributs/htmlatributs.component';
import { CommandsComponent } from './commands/commands.component';
import { JsonComponent } from './json/json.component';
import { AjaxComponent } from './ajax/ajax.component';
@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    CssComponent,
    JavascriptComponent,
    PageNotFoundComponent,
    LoginComponent,
    BootsrapComponent,
    JqueryComponent,
    AngularComponent,
    Html5tutorialComponent,
    HtmlreferencesComponent,
    Html5demoComponent,
    Html5referencesComponent,
    Html5toolsComponent,
    HomeComponent,
    WebsiteComponent,
    HtmltagsComponent,
    HtmlatributsComponent,
    CommandsComponent,
    JsonComponent,
    AjaxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
