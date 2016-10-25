import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';

import { AppComponent } from "./app.component";
import { MenuComponent } from "./components/menu/menu.component";
import { HomeComponent } from "./components/home/home.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";
import { FooterComponent } from "./components/footer/footer.component";
import { routing } from "./app.routing";
// import { MenuComponent } from "./components/menu/menu.component";

// import { OtherComponent } from "./other/other.component";
// , OtherComponent, AlertComponent
@NgModule({
    declarations: [
      AppComponent,
      MenuComponent,
      HomeComponent,
      ServiciosComponent,
      FooterComponent
    ],
    imports: [BrowserModule, routing],
    bootstrap: [AppComponent]
})

export class AppModule {

}
