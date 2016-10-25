"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
// import { AlertComponent } from 'ng2-bootstrap/ng2-bootstrap';
var app_component_1 = require("./app.component");
var menu_component_1 = require("./components/menu/menu.component");
var home_component_1 = require("./components/home/home.component");
var servicios_component_1 = require("./components/servicios/servicios.component");
var footer_component_1 = require("./components/footer/footer.component");
var app_routing_1 = require("./app.routing");
// import { MenuComponent } from "./components/menu/menu.component";
// import { OtherComponent } from "./other/other.component";
// , OtherComponent, AlertComponent
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                menu_component_1.MenuComponent,
                home_component_1.HomeComponent,
                servicios_component_1.ServiciosComponent,
                footer_component_1.FooterComponent
            ],
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
