"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var utils = require("utils/utils");
var shared_1 = require("../shared");
var books_component_1 = require("../books.component");
var shared_2 = require("../../shared");
var BookListComponent = (function () {
    function BookListComponent(store, router, BooksComponent, loginService) {
        this.router = router;
        this.BooksComponent = BooksComponent;
        this.loading = new core_1.EventEmitter();
        this.loaded = new core_1.EventEmitter();
        this.listLoaded = false;
        this.store = store;
    }
    BookListComponent.prototype.load = function () {
        var _this = this;
        console.log("loading...");
        this.loading.next("");
        this.store.load(null, null, null)
            .subscribe(function () {
            _this.loaded.next("");
            _this.listLoaded = true;
            //listView.refresh();
            _this.store.page++;
        }, function (e) {
            if (e.status == 401) {
                console.log("Logging off...");
                _this.BooksComponent.logoff();
            }
            console.dir(e);
            shared_2.alert("An error occurred loading your book list.");
        });
    };
    BookListComponent.prototype.getAuthors = function (authors) {
        var names = authors.map(function (item) { return item.name; });
        names = names.join(', ');
        if (names) {
            names = " (" + names + ")";
        }
        return names;
    };
    // The following trick makes the background color of each cell
    // in the UITableView transparent as it’s created.
    BookListComponent.prototype.makeBackgroundTransparent = function (args) {
        var cell = args.ios;
        if (cell) {
            // support XCode 8
            cell.backgroundColor = utils.ios.getter(UIColor, UIColor.clearColor);
        }
    };
    BookListComponent.prototype.imageSource = function (book) {
        if (book.deleted) {
            //return book.done ? "res://selected" : "res://nonselected";
        }
        //return book.done ? "res://checked" : "res://unchecked";
    };
    BookListComponent.prototype.toggleDone = function (book) {
        if (book.deleted) {
            //book.done = !book.done;
            return;
        }
        this.store.toggleDoneFlag(book);
        /*.subscribe(
          () => { },
          () => {
            alert("An error occurred managing your book list.");
          }
        );
        */
    };
    BookListComponent.prototype.delete = function (book) {
        var _this = this;
        this.loading.next("");
        var successHandler = function () { return _this.loaded.next(""); };
        var errorHandler = function () {
            shared_2.alert("An error occurred while deleting an item from your list.");
            _this.loaded.next("");
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
    };
    return BookListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], BookListComponent.prototype, "showDeleted", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BookListComponent.prototype, "row", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BookListComponent.prototype, "loading", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BookListComponent.prototype, "loaded", void 0);
BookListComponent = __decorate([
    core_1.Component({
        selector: "gr-book-list",
        moduleId: module.id,
        templateUrl: "./book-list.component.html",
        styleUrls: ["./book-list.component.css"],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [shared_1.BookService,
        router_1.Router,
        books_component_1.BooksComponent,
        shared_2.LoginService])
], BookListComponent);
exports.BookListComponent = BookListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvb2stbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFDaEcsMENBQXlDO0FBQ3pDLG1DQUFxQztBQUNyQyxvQ0FBd0M7QUFDeEMsc0RBQW9EO0FBRXBELHVDQUFtRDtBQVduRCxJQUFhLGlCQUFpQjtJQVc1QiwyQkFBWSxLQUFrQixFQUNWLE1BQWMsRUFDZCxjQUE4QixFQUN0QyxZQUEwQjtRQUZsQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVnhDLFlBQU8sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFJdEMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQU9mLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxnQ0FBSSxHQUFKO1FBQUEsaUJBb0JDO1FBbkJDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7YUFDOUIsU0FBUyxDQUNSO1lBQ0UsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7WUFDdkIscUJBQXFCO1lBQ3JCLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxFQUNELFVBQUMsQ0FBQztZQUNBLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQUEsQ0FBQztnQkFD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ckdZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcbmltcG9ydCB7IEJvb2tTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZFwiO1xuaW1wb3J0IHsgQm9va3NDb21wb25lbnQgfSBmcm9tIFwiLi4vYm9va3MuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBCb29rIH0gZnJvbSBcIi4uLy4uL21vZGVscy9ib29rXCJcbmltcG9ydCB7IGFsZXJ0LCBMb2dpblNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkXCI7XG5cbmRlY2xhcmUgdmFyIFVJQ29sb3I6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImdyLWJvb2stbGlzdFwiLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogXCIuL2Jvb2stbGlzdC5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vYm9vay1saXN0LmNvbXBvbmVudC5jc3NcIl0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIEJvb2tMaXN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgc2hvd0RlbGV0ZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJvdztcbiAgQE91dHB1dCgpIGxvYWRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBsb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHVibGljIHN0b3JlOiBCb29rU2VydmljZTtcbiAgcHVibGljIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlO1xuICBsaXN0TG9hZGVkID0gZmFsc2U7XG5cblxuICBjb25zdHJ1Y3RvcihzdG9yZTogQm9va1NlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgQm9va3NDb21wb25lbnQ6IEJvb2tzQ29tcG9uZW50LFxuICAgICAgICAgICAgICBsb2dpblNlcnZpY2U6IExvZ2luU2VydmljZSkge1xuICAgICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICB9XG5cbiAgbG9hZCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImxvYWRpbmcuLi5cIik7XG4gICAgdGhpcy5sb2FkaW5nLm5leHQoXCJcIik7XG4gICAgdGhpcy5zdG9yZS5sb2FkKG51bGwsIG51bGwsIG51bGwpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkZWQubmV4dChcIlwiKTtcbiAgICAgICAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgIC8vbGlzdFZpZXcucmVmcmVzaCgpO1xuICAgICAgICAgIHRoaXMuc3RvcmUucGFnZSsrO1xuICAgICAgICB9LFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLnN0YXR1cyA9PSA0MDEpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2dnaW5nIG9mZi4uLlwiKTtcbiAgICAgICAgICAgIHRoaXMuQm9va3NDb21wb25lbnQubG9nb2ZmKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnNvbGUuZGlyKGUpO1xuICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgbG9hZGluZyB5b3VyIGJvb2sgbGlzdC5cIik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBnZXRBdXRob3JzKGF1dGhvcnM6IGFueSl7XG4gICAgbGV0IG5hbWVzID0gYXV0aG9ycy5tYXAoaXRlbSA9PiBpdGVtLm5hbWUpO1xuICAgIG5hbWVzID0gbmFtZXMuam9pbignLCAnKTtcbiAgICBpZiAobmFtZXMpIHtcbiAgICAgIG5hbWVzID0gXCIgKFwiICsgbmFtZXMgKyBcIilcIjtcbiAgICB9XG4gICAgcmV0dXJuIG5hbWVzO1xuICB9XG5cblxuICAvLyBUaGUgZm9sbG93aW5nIHRyaWNrIG1ha2VzIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGVhY2ggY2VsbFxuICAvLyBpbiB0aGUgVUlUYWJsZVZpZXcgdHJhbnNwYXJlbnQgYXMgaXTigJlzIGNyZWF0ZWQuXG4gIG1ha2VCYWNrZ3JvdW5kVHJhbnNwYXJlbnQoYXJncykge1xuICAgIGxldCBjZWxsID0gYXJncy5pb3M7XG4gICAgaWYgKGNlbGwpIHtcbiAgICAgIC8vIHN1cHBvcnQgWENvZGUgOFxuICAgICAgY2VsbC5iYWNrZ3JvdW5kQ29sb3IgPSB1dGlscy5pb3MuZ2V0dGVyKFVJQ29sb3IsIFVJQ29sb3IuY2xlYXJDb2xvcik7XG4gICAgfVxuICB9XG5cbiAgaW1hZ2VTb3VyY2UoYm9vaykge1xuICAgIGlmIChib29rLmRlbGV0ZWQpIHtcbiAgICAgIC8vcmV0dXJuIGJvb2suZG9uZSA/IFwicmVzOi8vc2VsZWN0ZWRcIiA6IFwicmVzOi8vbm9uc2VsZWN0ZWRcIjtcbiAgICB9XG4gICAgLy9yZXR1cm4gYm9vay5kb25lID8gXCJyZXM6Ly9jaGVja2VkXCIgOiBcInJlczovL3VuY2hlY2tlZFwiO1xuICB9XG5cbiAgdG9nZ2xlRG9uZShib29rOiBCb29rKSB7XG4gICAgaWYgKGJvb2suZGVsZXRlZCkge1xuICAgICAgLy9ib29rLmRvbmUgPSAhYm9vay5kb25lO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcmUudG9nZ2xlRG9uZUZsYWcoYm9vaylcbiAgICAgIC8qLnN1YnNjcmliZShcbiAgICAgICAgKCkgPT4geyB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCBtYW5hZ2luZyB5b3VyIGJvb2sgbGlzdC5cIik7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICAqL1xuICB9XG5cbiAgZGVsZXRlKGJvb2s6IEJvb2spIHtcbiAgICB0aGlzLmxvYWRpbmcubmV4dChcIlwiKTtcbiAgICBsZXQgc3VjY2Vzc0hhbmRsZXIgPSAoKSA9PiB0aGlzLmxvYWRlZC5uZXh0KFwiXCIpO1xuICAgIGxldCBlcnJvckhhbmRsZXIgPSAoKSA9PiB7XG4gICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIGRlbGV0aW5nIGFuIGl0ZW0gZnJvbSB5b3VyIGxpc3QuXCIpO1xuICAgICAgdGhpcy5sb2FkZWQubmV4dChcIlwiKTtcbiAgICB9O1xuICAgIC8qXG5cbiAgICBpZiAoYm9vay5kZWxldGVkKSB7XG4gICAgICB0aGlzLnN0b3JlLnBlcm1hbmVudGx5RGVsZXRlKGJvb2spXG4gICAgICAgIC5zdWJzY3JpYmUoc3VjY2Vzc0hhbmRsZXIsIGVycm9ySGFuZGxlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUuc2V0RGVsZXRlRmxhZyhib29rKVxuICAgICAgICAuc3Vic2NyaWJlKHN1Y2Nlc3NIYW5kbGVyLCBlcnJvckhhbmRsZXIpO1xuICAgIH1cbiAgICAqL1xuICB9XG59XG5cbiJdfQ==