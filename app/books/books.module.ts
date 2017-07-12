import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { booksRouting } from "./books.routing";
import { BooksComponent } from "./books.component";
import { BookListComponent } from "./book-list/book-list.component";
import { ItemStatusPipe } from "./book-list/item-status.pipe";

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    booksRouting
  ],
  declarations: [
    BooksComponent,
    BookListComponent,
    ItemStatusPipe
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BooksModule {}
