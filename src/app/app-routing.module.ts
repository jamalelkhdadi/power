import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { JqueryComponent } from './jquery/jquery.component';
import { BootsrapComponent } from './bootsrap/bootsrap.component';
import { AngularComponent } from './angular/angular.component';
import { WebsiteComponent } from './home/website/website.component';
import { HtmltagsComponent } from './html/htmltags/htmltags.component';
import { HtmlatributsComponent } from './html/htmlatributs/htmlatributs.component';
import { CommandsComponent } from './commands/commands.component';
import { JsonComponent } from './json/json.component';
import { AjaxComponent } from './ajax/ajax.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'website',
    component: WebsiteComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'html',
    component: HtmlComponent,
    pathMatch: 'full'
  },
  {
    path: 'htmltags',
    component: HtmltagsComponent,
    pathMatch: 'full'
  },
  {
    path: 'htmlatributs',
    component: HtmlatributsComponent,
    pathMatch: 'full'
  },
  {
    path: 'css',
    component: CssComponent,
    pathMatch: 'full'
  },
  {
    path: 'javascript',
    component: JavascriptComponent,
    pathMatch: 'full'
  },
  {
    path: 'jquery',
    component: JqueryComponent,
    pathMatch: 'full'
  },
  {
    path: 'bootsrap',
    component: BootsrapComponent,
    pathMatch: 'full'
  },
  {
    path: 'angular',
    component: AngularComponent,
    pathMatch: 'full'
  },
  {
    path: 'json',
    component: JsonComponent,
    pathMatch: 'full'
  },
  {
    path: 'ajax',
    component: AjaxComponent,
    pathMatch: 'full'
  },
  {
    path: 'commands',
    component: CommandsComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
