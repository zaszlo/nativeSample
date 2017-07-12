import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { action } from "ui/dialogs";
import { Color } from "color";
import { Page } from "ui/page";
import { TextField } from "ui/text-field";
import * as SocialShare from  "nativescript-social-share";
import { isAndroid } from "platform";
//import { BookListComponent } from "./book-list/book-list.component";
import { BookService } from "./shared";
import { LoginService, alert } from "../shared";


@Component({
  selector: "gr-books",
  moduleId: module.id,
  templateUrl: "./books.component.html",
  styleUrls: ["./books-common.css", "./books.component.css"],
  providers: [BookService]
})
export class BooksComponent implements OnInit {
  isAndroid;
  isShowingRecent = false;
  isLoading = false;

  @ViewChild("bookTextField") bookTextField: ElementRef;

  constructor(private router: Router,
    private store: BookService,
    private loginService: LoginService,
    //private bookList: BookListComponent,
    private page: Page) {}

  ngOnInit() {
    this.page.actionBarHidden = true;
    this.page.className = "list-page";
  }

  public layoutLoaded(args){
        this.isAndroid = !!this.page.android;
    }

  // Prevent the first textfield from receiving focus on Android
  // See http://stackoverflow.com/questions/5056734/android-force-edittext-to-remove-focus
  handleAndroidFocus(textField, container) {
    if (container.android) {
      container.android.setFocusableInTouchMode(true);
      container.android.setFocusable(true);
      textField.android.clearFocus();
    }
  }

  showActivityIndicator() {
    this.isLoading = true;
  }
  hideActivityIndicator() {
    this.isLoading = false;
  }

  getAllAuthors(): any {
    return this.store.getAuthorNames;
  }
  getAllTags(): any {
    return this.store.getTagNames;
  }
  filter() {
    console.log('Filter is called');
    this.store.items = null;
    this.store.page = 1;
    console.log('Filter is calling load');
    this.store.load(null, null, null).subscribe(
        () => {
          //listView.refresh();
          this.store.page++;
        },
        (e) => {
          if (e.status == 401){
            console.log("Logging off...");
            this.logoff();
          }
          console.dir(e);
          alert("An error occurred loading your book list.");
        }
      );
  }

  showMenu() {
    action({
      message: "What would you like to do?",
      actions: ["Share", "Log Off"],
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result === "Share") {
        this.share();
      } else if (result === "Log Off") {
        this.logoff();
      }
    });
  }

  share() {
    let items = this.store.items.value;
    let list = [];
    for (let i = 0, size = items.length; i < size ; i++) {
      list.push(items[i].title);
    }
    SocialShare.shareText(list.join(", ").trim());
  }

  logoff() {
    this.loginService.logoff();
    this.router.navigate(["/login"]);
  }
}
