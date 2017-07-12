"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var books_routing_1 = require("./books.routing");
var books_component_1 = require("./books.component");
var book_list_component_1 = require("./book-list/book-list.component");
var item_status_pipe_1 = require("./book-list/item-status.pipe");
var BooksModule = (function () {
    function BooksModule() {
    }
    return BooksModule;
}());
BooksModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            books_routing_1.booksRouting
        ],
        declarations: [
            books_component_1.BooksComponent,
            book_list_component_1.BookListComponent,
            item_status_pipe_1.ItemStatusPipe
        ],
        schemas: [core_1.NO_ERRORS_SCHEMA]
    })
], BooksModule);
exports.BooksModule = BooksModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va3MubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9va3MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUNyRSxzQ0FBMkQ7QUFDM0QsaURBQStDO0FBQy9DLHFEQUFtRDtBQUNuRCx1RUFBb0U7QUFDcEUsaUVBQThEO0FBZTlELElBQWEsV0FBVztJQUF4QjtJQUEwQixDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDLEFBQTNCLElBQTJCO0FBQWQsV0FBVztJQWJ2QixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsK0JBQXVCO1lBQ3ZCLDRCQUFZO1NBQ2I7UUFDRCxZQUFZLEVBQUU7WUFDWixnQ0FBYztZQUNkLHVDQUFpQjtZQUNqQixpQ0FBYztTQUNmO1FBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7S0FDNUIsQ0FBQztHQUNXLFdBQVcsQ0FBRztBQUFkLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBib29rc1JvdXRpbmcgfSBmcm9tIFwiLi9ib29rcy5yb3V0aW5nXCI7XG5pbXBvcnQgeyBCb29rc0NvbXBvbmVudCB9IGZyb20gXCIuL2Jvb2tzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQm9va0xpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9ib29rLWxpc3QvYm9vay1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbVN0YXR1c1BpcGUgfSBmcm9tIFwiLi9ib29rLWxpc3QvaXRlbS1zdGF0dXMucGlwZVwiO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgIGJvb2tzUm91dGluZ1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCb29rc0NvbXBvbmVudCxcbiAgICBCb29rTGlzdENvbXBvbmVudCxcbiAgICBJdGVtU3RhdHVzUGlwZVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQm9va3NNb2R1bGUge31cbiJdfQ==