"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var servicios_component_1 = require("./components/servicios/servicios.component");
var APP_ROUTES = [
    { path: 'servicios', component: servicios_component_1.ServiciosComponent },
    { path: '', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
