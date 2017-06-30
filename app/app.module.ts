import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { authProviders, appRoutes } from "./app.routing";
import { setStatusBarColors, BackendService, LoginService } from "./shared";
import { AppComponent } from "./app.component";

import { LoginModule } from "./login/login.module";
import { GroceriesModule } from "./groceries/groceries.module";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        LoginModule,
        GroceriesModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        BackendService,
        LoginService,
        authProviders
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
