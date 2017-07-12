"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("ui/dialogs");
var page_1 = require("ui/page");
var SocialShare = require("nativescript-social-share");
//import { BookListComponent } from "./book-list/book-list.component";
var shared_1 = require("./shared");
var shared_2 = require("../shared");
var BooksComponent = (function () {
    function BooksComponent(router, store, loginService, 
        //private bookList: BookListComponent,
        page) {
        this.router = router;
        this.store = store;
        this.loginService = loginService;
        this.page = page;
        this.isShowingRecent = false;
        this.isLoading = false;
    }
    BooksComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.className = "list-page";
    };
    BooksComponent.prototype.layoutLoaded = function (args) {
        this.isAndroid = !!this.page.android;
    };
    // Prevent the first textfield from receiving focus on Android
    // See http://stackoverflow.com/questions/5056734/android-force-edittext-to-remove-focus
    BooksComponent.prototype.handleAndroidFocus = function (textField, container) {
        if (container.android) {
            container.android.setFocusableInTouchMode(true);
            container.android.setFocusable(true);
            textField.android.clearFocus();
        }
    };
    BooksComponent.prototype.showActivityIndicator = function () {
        this.isLoading = true;
    };
    BooksComponent.prototype.hideActivityIndicator = function () {
        this.isLoading = false;
    };
    BooksComponent.prototype.getAllAuthors = function () {
        return this.store.getAuthorNames;
    };
    BooksComponent.prototype.getAllTags = function () {
        return this.store.getTagNames;
    };
    BooksComponent.prototype.filter = function () {
        var _this = this;
        console.log('Filter is called');
        this.store.items = null;
        this.store.page = 1;
        console.log('Filter is calling load');
        this.store.load(null, null, null).subscribe(function () {
            //listView.refresh();
            _this.store.page++;
        }, function (e) {
            if (e.status == 401) {
                console.log("Logging off...");
                _this.logoff();
            }
            console.dir(e);
            shared_2.alert("An error occurred loading your book list.");
        });
    };
    BooksComponent.prototype.showMenu = function () {
        var _this = this;
        dialogs_1.action({
            message: "What would you like to do?",
            actions: ["Share", "Log Off"],
            cancelButtonText: "Cancel"
        }).then(function (result) {
            if (result === "Share") {
                _this.share();
            }
            else if (result === "Log Off") {
                _this.logoff();
            }
        });
    };
    BooksComponent.prototype.share = function () {
        var items = this.store.items.value;
        var list = [];
        for (var i = 0, size = items.length; i < size; i++) {
            list.push(items[i].title);
        }
        SocialShare.shareText(list.join(", ").trim());
    };
    BooksComponent.prototype.logoff = function () {
        this.loginService.logoff();
        this.router.navigate(["/login"]);
    };
    return BooksComponent;
}());
__decorate([
    core_1.ViewChild("bookTextField"),
    __metadata("design:type", core_1.ElementRef)
], BooksComponent.prototype, "bookTextField", void 0);
BooksComponent = __decorate([
    core_1.Component({
        selector: "gr-books",
        moduleId: module.id,
        templateUrl: "./books.component.html",
        styleUrls: ["./books-common.css", "./books.component.css"],
        providers: [shared_1.BookService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        shared_1.BookService,
        shared_2.LoginService,
        page_1.Page])
], BooksComponent);
exports.BooksComponent = BooksComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9va3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9va3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUN6QyxzQ0FBb0M7QUFFcEMsZ0NBQStCO0FBRS9CLHVEQUEwRDtBQUUxRCxzRUFBc0U7QUFDdEUsbUNBQXVDO0FBQ3ZDLG9DQUFnRDtBQVVoRCxJQUFhLGNBQWM7SUFPekIsd0JBQW9CLE1BQWMsRUFDeEIsS0FBa0IsRUFDbEIsWUFBMEI7UUFDbEMsc0NBQXNDO1FBQzlCLElBQVU7UUFKQSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWE7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFFMUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVRwQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBUUssQ0FBQztJQUV4QixpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0lBRU0scUNBQVksR0FBbkIsVUFBb0IsSUFBSTtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN6QyxDQUFDO0lBRUgsOERBQThEO0lBQzlELHdGQUF3RjtJQUN4RiwyQ0FBa0IsR0FBbEIsVUFBbUIsU0FBUyxFQUFFLFNBQVM7UUFDckMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoRCxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJ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QzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBN0ZELElBNkZDO0FBeEY2QjtJQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQzs4QkFBZ0IsaUJBQVU7cURBQUM7QUFMM0MsY0FBYztJQVAxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsdUJBQXVCLENBQUM7UUFDMUQsU0FBUyxFQUFFLENBQUMsb0JBQVcsQ0FBQztLQUN6QixDQUFDO3FDQVE0QixlQUFNO1FBQ2pCLG9CQUFXO1FBQ0oscUJBQVk7UUFFcEIsV0FBSTtHQVhULGNBQWMsQ0E2RjFCO0FBN0ZZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gIFwibmF0aXZlc2NyaXB0LXNvY2lhbC1zaGFyZVwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCI7XG4vL2ltcG9ydCB7IEJvb2tMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vYm9vay1saXN0L2Jvb2stbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEJvb2tTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBMb2dpblNlcnZpY2UsIGFsZXJ0IH0gZnJvbSBcIi4uL3NoYXJlZFwiO1xuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJnci1ib29rc1wiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2Jvb2tzLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9ib29rcy1jb21tb24uY3NzXCIsIFwiLi9ib29rcy5jb21wb25lbnQuY3NzXCJdLFxuICBwcm92aWRlcnM6IFtCb29rU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQm9va3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpc0FuZHJvaWQ7XG4gIGlzU2hvd2luZ1JlY2VudCA9IGZhbHNlO1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKFwiYm9va1RleHRGaWVsZFwiKSBib29rVGV4dEZpZWxkOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBzdG9yZTogQm9va1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICAvL3ByaXZhdGUgYm9va0xpc3Q6IEJvb2tMaXN0Q29tcG9uZW50LFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB0aGlzLnBhZ2UuY2xhc3NOYW1lID0gXCJsaXN0LXBhZ2VcIjtcbiAgfVxuXG4gIHB1YmxpYyBsYXlvdXRMb2FkZWQoYXJncyl7XG4gICAgICAgIHRoaXMuaXNBbmRyb2lkID0gISF0aGlzLnBhZ2UuYW5kcm9pZDtcbiAgICB9XG5cbiAgLy8gUHJldmVudCB0aGUgZmlyc3QgdGV4dGZpZWxkIGZyb20gcmVjZWl2aW5nIGZvY3VzIG9uIEFuZHJvaWRcbiAgLy8gU2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTA1NjczNC9hbmRyb2lkLWZvcmNlLWVkaXR0ZXh0LXRvLXJlbW92ZS1mb2N1c1xuICBoYW5kbGVBbmRyb2lkRm9jdXModGV4dEZpZWxkLCBjb250YWluZXIpIHtcbiAgICBpZiAoY29udGFpbmVyLmFuZHJvaWQpIHtcbiAgICAgIGNvbnRhaW5lci5hbmRyb2lkLnNldEZvY3VzYWJsZUluVG91Y2hNb2RlKHRydWUpO1xuICAgICAgY29udGFpbmVyLmFuZHJvaWQuc2V0Rm9jdXNhYmxlKHRydWUpO1xuICAgICAgdGV4dEZpZWxkLmFuZHJvaWQuY2xlYXJGb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dBY3Rpdml0eUluZGljYXRvcigpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gIH1cbiAgaGlkZUFjdGl2aXR5SW5kaWNhdG9yKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gIH1cblxuICBnZXRBbGxBdXRob3JzKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuZ2V0QXV0aG9yTmFtZXM7XG4gIH1cbiAgZ2V0QWxsVGFncygpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmdldFRhZ05hbWVzO1xuICB9XG4gIGZpbHRlcigpIHtcbiAgICBjb25zb2xlLmxvZygnRmlsdGVyIGlzIGNhbGxlZCcpO1xuICAgIHRoaXMuc3RvcmUuaXRlbXMgPSBudWxsO1xuICAgIHRoaXMuc3RvcmUucGFnZSA9IDE7XG4gICAgY29uc29sZS5sb2coJ0ZpbHRlciBpcyBjYWxsaW5nIGxvYWQnKTtcbiAgICB0aGlzLnN0b3JlLmxvYWQobnVsbCwgbnVsbCwgbnVsbCkuc3Vic2NyaWJlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgLy9saXN0Vmlldy5yZWZyZXNoKCk7XG4gICAgICAgICAgdGhpcy5zdG9yZS5wYWdlKys7XG4gICAgICAgIH0sXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuc3RhdHVzID09IDQwMSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkxvZ2dpbmcgb2ZmLi4uXCIpO1xuICAgICAgICAgICAgdGhpcy5sb2dvZmYoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc29sZS5kaXIoZSk7XG4gICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCBsb2FkaW5nIHlvdXIgYm9vayBsaXN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIHNob3dNZW51KCkge1xuICAgIGFjdGlvbih7XG4gICAgICBtZXNzYWdlOiBcIldoYXQgd291bGQgeW91IGxpa2UgdG8gZG8/XCIsXG4gICAgICBhY3Rpb25zOiBbXCJTaGFyZVwiLCBcIkxvZyBPZmZcIl0sXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIkNhbmNlbFwiXG4gICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBpZiAocmVzdWx0ID09PSBcIlNoYXJlXCIpIHtcbiAgICAgICAgdGhpcy5zaGFyZSgpO1xuICAgICAgfSBlbHNlIGlmIChyZXN1bHQgPT09IFwiTG9nIE9mZlwiKSB7XG4gICAgICAgIHRoaXMubG9nb2ZmKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzaGFyZSgpIHtcbiAgICBsZXQgaXRlbXMgPSB0aGlzLnN0b3JlLml0ZW1zLnZhbHVlO1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIHNpemUgPSBpdGVtcy5sZW5ndGg7IGkgPCBzaXplIDsgaSsrKSB7XG4gICAgICBsaXN0LnB1c2goaXRlbXNbaV0udGl0bGUpO1xuICAgIH1cbiAgICBTb2NpYWxTaGFyZS5zaGFyZVRleHQobGlzdC5qb2luKFwiLCBcIikudHJpbSgpKTtcbiAgfVxuXG4gIGxvZ29mZigpIHtcbiAgICB0aGlzLmxvZ2luU2VydmljZS5sb2dvZmYoKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICB9XG59XG4iXX0=