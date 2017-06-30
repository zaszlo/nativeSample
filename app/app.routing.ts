import { AuthGuard } from "./auth-guard.service";

export const authProviders = [
  AuthGuard
];

export const appRoutes = [
	//{ path: "", component: LoginComponent },
	{ path: "", redirectTo: "/groceries", pathMatch: "full" },
	//{ path: "/groceries", component: GroceriesComponent }
    /*{ path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },*/
];