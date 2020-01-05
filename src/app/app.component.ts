import {Component} from "@angular/core";
// to create a component we need to provide 2 meta data items  :
// 1. selector
// 2. template / template url
// check the index.html in this project the slector will use the <app-root></app-root> in the index.html as a target to be used
// by the angular engine
@Component({
  //selector: 'app-root', //  to write selectors , we should use - so let's change to mw-app
  selector: 'my-app', //  to write selectors , we should use - so let's change to mw-app
  //template: '<h1>My App after changed</h1>' // this is an inline template
  // template url instead of the above inline template
  templateUrl: './app.component.html',
  // styles properties - add css for h1 tag
  // styles: [`
  //   h1 {color: white;}
  //   .description{
  //     text: italic;
  //     color: green;
  //   }
  //
  // `]
  // now using stylesurl
  styleUrls: ['./app.component.css']

})
export class AppComponent{}
