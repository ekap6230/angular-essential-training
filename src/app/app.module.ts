/*
components
directives
routings
services
modules
decorators - @Component{}
 */

// to infrom angular that this is a module we are telling angular that this is a module
// we are telling angular to import the NgModules
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from './app.component';
@NgModule({
  imports:[
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule{}

// to enable other modules to use this one , we need to export this object
