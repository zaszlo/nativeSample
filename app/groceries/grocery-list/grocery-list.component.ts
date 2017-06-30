import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from "@angular/core";
import * as utils from "utils/utils";

import { GroceryService } from "../shared";
import { Book } from "../../models/book"
import { alert } from "../../shared";

declare var UIColor: any;

@Component({
  selector: "gr-grocery-list",
  moduleId: module.id,
  templateUrl: "./grocery-list.component.html",
  styleUrls: ["./grocery-list.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroceryListComponent {
  @Input() showDeleted: boolean;
  @Input() row;
  @Output() loading = new EventEmitter();
  @Output() loaded = new EventEmitter();

  public store: GroceryService;
  listLoaded = false;

  constructor(store: GroceryService) {
      this.store = store;
  }

  load() {
    this.loading.next("");
    this.store.load()
      .subscribe(
        () => {
          this.loaded.next("");
          this.listLoaded = true;
        },
        () => {
          alert("An error occurred loading your grocery list.");
        }
      );
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
          alert("An error occurred managing your grocery list.");
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

