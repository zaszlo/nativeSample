import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { BooksComponent } from "./books.component";
import { AuthGuard } from "../auth-guard.service";

const booksRoutes: Routes = [
  { path: "books", component: BooksComponent, canActivate: [AuthGuard] },
];
export const booksRouting: ModuleWithProviders = RouterModule.forChild(booksRoutes);