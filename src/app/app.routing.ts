import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ServiciosComponent } from "./components/servicios/servicios.component";

const APP_ROUTES: Routes = [
	{ path: 'servicios', component: ServiciosComponent },
	{ path: '', component: HomeComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);
