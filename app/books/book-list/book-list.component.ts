import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import * as utils from "utils/utils";
import { BookService } from "../shared";
import { BooksComponent } from "../books.component";
import { Book } from "../../models/book"
import { alert, LoginService } from "../../shared";

declare var UIColor: any;

@Component({
  selector: "gr-book-list",
  moduleId: module.id,
  templateUrl: "./book-list.component.html",
  styleUrls: ["./book-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookListComponent {
  @Input() showDeleted: boolean;
  @Input() row;
  @Output() loading = new EventEmitter();
  @Output() loaded = new EventEmitter();

  public store: BookService;
  public loginService: LoginService;
  listLoaded = false;


  constructor(store: BookService,
              private router: Router,
              private BooksComponent: BooksComponent,
              loginService: LoginService) {
      this.store = store;
  }

  load() {
    console.log("loading...");
    this.loading.next("");
    this.store.load(null, null, null)
      .subscribe(
        () => {
          this.loaded.next("");
          this.listLoaded = true;
          //listView.refresh();
          this.store.page++;
        },
        (e) => {
          if (e.status == 401){
            console.log("Logging off...");
            this.BooksComponent.logoff();
          }
          console.dir(e);
          alert("An error occurred loading your book list.");
        }
      );
  }

  getAuthors(authors: any){
    let names = authors.map(item => item.name);
    names = names.join(', ');
    if (names) {
      names = " (" + names + ")";
    }
    return names;
  }


  // The following trick makes the background color of each cell
  // in the UITableView transparent as it’s created.
  makeBackgroundTransparent(args) {
    let cell = args.ios;
    if (cell) {
      // support XCode 8
      cell.backgroundColor = utils.ios.getter(UIColor, UIColor.clearColor);
    }
  }

  imageSource(book) {
    if (book.deleted) {
      //return book.done ? "res://selected" : "res://nonselected";
    }
    //return book.done ? "res://checked" : "res://unchecked";
  }

  toggleDone(book: Book) {
    if (book.deleted) {
      //book.done = !book.done;
      return;
    }

    this.store.toggleDoneFlag(book)
      /*.subscribe(
        () => { },
        () => {
          alert("An error occurred managing your book list.");
        }
      );
      */
  }

  delete(book: Book) {
    this.loading.next("");
    let successHandler = () => this.loaded.next("");
    let errorHandler = () => {
      alert("An error occurred while deleting an item from your list.");
      this.loaded.next("");
    };
    /*

    if (book.deleted) {
      this.store.permanentlyDelete(book)
        .subscribe(successHandler, errorHandler);
    } else {
      this.store.setDeleteFlag(book)
        .subscribe(successHandler, errorHandler);
    }
    */
  }
}

