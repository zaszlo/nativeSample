"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("ui/dialogs");
var page_1 = require("ui/page");
var SocialShare = require("nativescript-social-share");
var shared_1 = require("./shared");
var shared_2 = require("../shared");
var GroceriesComponent = (function () {
    function GroceriesComponent(router, store, loginService, page) {
        this.router = router;
        this.store = store;
        this.loginService = loginService;
        this.page = page;
        this.grocery = "";
        this.isShowingRecent = false;
        this.isLoading = false;
    }
    GroceriesComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit begin");
        this.page.actionBarHidden = true;
        this.page.className = "list-page";
        console.log("ngOnInit end");
    };
    GroceriesComponent.prototype.layoutLoaded = function (args) {
        console.log("layoutLoaded begin");
        this.isAndroid = !!this.page.android;
        console.log("layoutLoaded end");
    };
    // Prevent the first textfield from receiving focus on Android
    // See http://stackoverflow.com/questions/5056734/android-force-edittext-to-remove-focus
    GroceriesComponent.prototype.handleAndroidFocus = function (textField, container) {
        if (container.android) {
            container.android.setFocusableInTouchMode(true);
            container.android.setFocusable(true);
            textField.android.clearFocus();
        }
    };
    GroceriesComponent.prototype.showActivityIndicator = function () {
        this.isLoading = true;
    };
    GroceriesComponent.prototype.hideActivityIndicator = function () {
        this.isLoading = false;
    };
    GroceriesComponent.prototype.add = function (target) {
        // If showing recent groceries the add button should do nothing.
        if (this.isShowingRecent) {
            return;
        }
        var textField = this.groceryTextField.nativeElement;
        if (this.grocery.trim() === "") {
            // If the user clicked the add button, and the textfield is empty,
            // focus the text field and return.
            if (target === "button") {
                textField.focus();
            }
            else {
                // If the user clicked return with an empty text field show an error.
                shared_2.alert("Enter a grocery item");
            }
            return;
        }
        // Dismiss the keyboard
        // TODO: Is it better UX to dismiss the keyboard, or leave it up so the
        // user can continue to add more groceries?
        textField.dismissSoftInput();
        /*
        this.showActivityIndicator();
        this.store.add(this.grocery)
          .subscribe(
            () => {
              this.grocery = "";
              this.hideActivityIndicator();
            },
            () => {
              alert("An error occurred while adding an item to your list.");
              this.hideActivityIndicator();
            }
          );
         */
    };
    GroceriesComponent.prototype.toggleRecent = function () {
        if (!this.isShowingRecent) {
            this.isShowingRecent = true;
            return;
        }
        this.showActivityIndicator();
        /*
        this.store.restore()
          .subscribe(
            () => {
              this.isShowingRecent = false;
              this.hideActivityIndicator();
            },
            () => {
              alert("An error occurred while adding groceries to your list.");
              this.hideActivityIndicator();
            }
          );
          */
    };
    GroceriesComponent.prototype.showMenu = function () {
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
    GroceriesComponent.prototype.share = function () {
        var items = this.store.items.value;
        var list = [];
        for (var i = 0, size = items.length; i < size; i++) {
            list.push(items[i].title);
        }
        SocialShare.shareText(list.join(", ").trim());
    };
    GroceriesComponent.prototype.logoff = function () {
        this.loginService.logoff();
        this.router.navigate(["/login"]);
    };
    return GroceriesComponent;
}());
__decorate([
    core_1.ViewChild("groceryTextField"),
    __metadata("design:type", core_1.ElementRef)
], GroceriesComponent.prototype, "groceryTextField", void 0);
GroceriesComponent = __decorate([
    core_1.Component({
        selector: "gr-groceries",
        moduleId: module.id,
        templateUrl: "./groceries.component.html",
        styleUrls: ["./groceries-common.css", "./groceries.component.css"],
        providers: [shared_1.GroceryService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        shared_1.GroceryService,
        shared_2.LoginService,
        page_1.Page])
], GroceriesComponent);
exports.GroceriesComponent = GroceriesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyaWVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyb2Nlcmllcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsMENBQXlDO0FBQ3pDLHNDQUFvQztBQUVwQyxnQ0FBK0I7QUFFL0IsdURBQXlEO0FBSXpELG1DQUEwQztBQUMxQyxvQ0FBZ0Q7QUFTaEQsSUFBYSxrQkFBa0I7SUFRN0IsNEJBQW9CLE1BQWMsRUFDeEIsS0FBcUIsRUFDckIsWUFBMEIsRUFDMUIsSUFBVTtRQUhBLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVZwQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBRXJCLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGNBQVMsR0FBRyxLQUFLLENBQUM7SUFPSyxDQUFDO0lBRXhCLHFDQUFRLEdBQVI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztRQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSx5Q0FBWSxHQUFuQixVQUFvQixJQUFJO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVILDhEQUE4RDtJQUM5RCx3RkFBd0Y7SUFD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QUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsbUNBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDSCx5QkFBQztBQUFELENBQUMsQUFwSUQsSUFvSUM7QUE5SGdDO0lBQTlCLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7OEJBQW1CLGlCQUFVOzREQUFDO0FBTmpELGtCQUFrQjtJQVA5QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGNBQWM7UUFDeEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSw0QkFBNEI7UUFDekMsU0FBUyxFQUFFLENBQUMsd0JBQXdCLEVBQUUsMkJBQTJCLENBQUM7UUFDbEUsU0FBUyxFQUFFLENBQUMsdUJBQWMsQ0FBQztLQUM1QixDQUFDO3FDQVM0QixlQUFNO1FBQ2pCLHVCQUFjO1FBQ1AscUJBQVk7UUFDcEIsV0FBSTtHQVhULGtCQUFrQixDQW9JOUI7QUFwSVksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgVGV4dEZpZWxkIH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcbmltcG9ydCAqIGFzIFNvY2lhbFNoYXJlIGZyb20gXCJuYXRpdmVzY3JpcHQtc29jaWFsLXNoYXJlXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwicGxhdGZvcm1cIjtcblxuaW1wb3J0IHsgR3JvY2VyeUxpc3RDb21wb25lbnQgfSBmcm9tIFwiLi9ncm9jZXJ5LWxpc3QvZ3JvY2VyeS1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgR3JvY2VyeVNlcnZpY2UgfSBmcm9tIFwiLi9zaGFyZWRcIjtcbmltcG9ydCB7IExvZ2luU2VydmljZSwgYWxlcnQgfSBmcm9tIFwiLi4vc2hhcmVkXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJnci1ncm9jZXJpZXNcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9ncm9jZXJpZXMuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2dyb2Nlcmllcy1jb21tb24uY3NzXCIsIFwiLi9ncm9jZXJpZXMuY29tcG9uZW50LmNzc1wiXSxcbiAgcHJvdmlkZXJzOiBbR3JvY2VyeVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIEdyb2Nlcmllc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGdyb2Nlcnk6IHN0cmluZyA9IFwiXCI7XG4gIGlzQW5kcm9pZDtcbiAgaXNTaG93aW5nUmVjZW50ID0gZmFsc2U7XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuXG4gIEBWaWV3Q2hpbGQoXCJncm9jZXJ5VGV4dEZpZWxkXCIpIGdyb2NlcnlUZXh0RmllbGQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHN0b3JlOiBHcm9jZXJ5U2VydmljZSxcbiAgICBwcml2YXRlIGxvZ2luU2VydmljZTogTG9naW5TZXJ2aWNlLFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcIm5nT25Jbml0IGJlZ2luXCIpO1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMucGFnZS5jbGFzc05hbWUgPSBcImxpc3QtcGFnZVwiO1xuICAgIGNvbnNvbGUubG9nKFwibmdPbkluaXQgZW5kXCIpO1xuICB9XG5cbiAgcHVibGljIGxheW91dExvYWRlZChhcmdzKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJsYXlvdXRMb2FkZWQgYmVnaW5cIik7XG4gICAgICAgIHRoaXMuaXNBbmRyb2lkID0gISF0aGlzLnBhZ2UuYW5kcm9pZDtcbiAgICAgICAgY29uc29sZS5sb2coXCJsYXlvdXRMb2FkZWQgZW5kXCIpO1xuICAgIH1cblxuICAvLyBQcmV2ZW50IHRoZSBmaXJzdCB0ZXh0ZmllbGQgZnJvbSByZWNlaXZpbmcgZm9jdXMgb24gQW5kcm9pZFxuICAvLyBTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81MDU2NzM0L2FuZHJvaWQtZm9yY2UtZWRpdHRleHQtdG8tcmVtb3ZlLWZvY3VzXG4gIGhhbmRsZUFuZHJvaWRGb2N1cyh0ZXh0RmllbGQsIGNvbnRhaW5lcikge1xuICAgIGlmIChjb250YWluZXIuYW5kcm9pZCkge1xuICAgICAgY29udGFpbmVyLmFuZHJvaWQuc2V0Rm9jdXNhYmxlSW5Ub3VjaE1vZGUodHJ1ZSk7XG4gICAgICBjb250YWluZXIuYW5kcm9pZC5zZXRGb2N1c2FibGUodHJ1ZSk7XG4gICAgICB0ZXh0RmllbGQuYW5kcm9pZC5jbGVhckZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0FjdGl2aXR5SW5kaWNhdG9yKCkge1xuICAgIHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcbiAgfVxuICBoaWRlQWN0aXZpdHlJbmRpY2F0b3IoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGFkZCh0YXJnZXQ6IHN0cmluZykge1xuICAgIC8vIElmIHNob3dpbmcgcmVjZW50IGdyb2NlcmllcyB0aGUgYWRkIGJ1dHRvbiBzaG91bGQgZG8gbm90aGluZy5cbiAgICBpZiAodGhpcy5pc1Nob3dpbmdSZWNlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgdGV4dEZpZWxkID0gPFRleHRGaWVsZD50aGlzLmdyb2NlcnlUZXh0RmllbGQubmF0aXZlRWxlbWVudDtcblxuICAgIGlmICh0aGlzLmdyb2NlcnkudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAvLyBJZiB0aGUgdXNlciBjbGlja2VkIHRoZSBhZGQgYnV0dG9uLCBhbmQgdGhlIHRleHRmaWVsZCBpcyBlbXB0eSxcbiAgICAgIC8vIGZvY3VzIHRoZSB0ZXh0IGZpZWxkIGFuZCByZXR1cm4uXG4gICAgICBpZiAodGFyZ2V0ID09PSBcImJ1dHRvblwiKSB7XG4gICAgICAgIHRleHRGaWVsZC5mb2N1cygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhlIHVzZXIgY2xpY2tlZCByZXR1cm4gd2l0aCBhbiBlbXB0eSB0ZXh0IGZpZWxkIHNob3cgYW4gZXJyb3IuXG4gICAgICAgIGFsZXJ0KFwiRW50ZXIgYSBncm9jZXJ5IGl0ZW1cIik7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRGlzbWlzcyB0aGUga2V5Ym9hcmRcbiAgICAvLyBUT0RPOiBJcyBpdCBiZXR0ZXIgVVggdG8gZGlzbWlzcyB0aGUga2V5Ym9hcmQsIG9yIGxlYXZlIGl0IHVwIHNvIHRoZVxuICAgIC8vIHVzZXIgY2FuIGNvbnRpbnVlIHRvIGFkZCBtb3JlIGdyb2Nlcmllcz9cbiAgICB0ZXh0RmllbGQuZGlzbWlzc1NvZnRJbnB1dCgpO1xuICAgIC8qXG4gICAgdGhpcy5zaG93QWN0aXZpdHlJbmRpY2F0b3IoKTtcbiAgICB0aGlzLnN0b3JlLmFkZCh0aGlzLmdyb2NlcnkpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5ncm9jZXJ5ID0gXCJcIjtcbiAgICAgICAgICB0aGlzLmhpZGVBY3Rpdml0eUluZGljYXRvcigpO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBhZGRpbmcgYW4gaXRlbSB0byB5b3VyIGxpc3QuXCIpO1xuICAgICAgICAgIHRoaXMuaGlkZUFjdGl2aXR5SW5kaWNhdG9yKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICovXG4gIH1cblxuICB0b2dnbGVSZWNlbnQoKSB7XG4gICAgaWYgKCF0aGlzLmlzU2hvd2luZ1JlY2VudCkge1xuICAgICAgdGhpcy5pc1Nob3dpbmdSZWNlbnQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2hvd0FjdGl2aXR5SW5kaWNhdG9yKCk7XG4gICAgLypcbiAgICB0aGlzLnN0b3JlLnJlc3RvcmUoKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNTaG93aW5nUmVjZW50ID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5oaWRlQWN0aXZpdHlJbmRpY2F0b3IoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgYWRkaW5nIGdyb2NlcmllcyB0byB5b3VyIGxpc3QuXCIpO1xuICAgICAgICAgIHRoaXMuaGlkZUFjdGl2aXR5SW5kaWNhdG9yKCk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICAqL1xuICB9XG5cbiAgc2hvd01lbnUoKSB7XG4gICAgYWN0aW9uKHtcbiAgICAgIG1lc3NhZ2U6IFwiV2hhdCB3b3VsZCB5b3UgbGlrZSB0byBkbz9cIixcbiAgICAgIGFjdGlvbnM6IFtcIlNoYXJlXCIsIFwiTG9nIE9mZlwiXSxcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiQ2FuY2VsXCJcbiAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGlmIChyZXN1bHQgPT09IFwiU2hhcmVcIikge1xuICAgICAgICB0aGlzLnNoYXJlKCk7XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdCA9PT0gXCJMb2cgT2ZmXCIpIHtcbiAgICAgICAgdGhpcy5sb2dvZmYoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNoYXJlKCkge1xuICAgIGxldCBpdGVtcyA9IHRoaXMuc3RvcmUuaXRlbXMudmFsdWU7XG4gICAgbGV0IGxpc3QgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgc2l6ZSA9IGl0ZW1zLmxlbmd0aDsgaSA8IHNpemUgOyBpKyspIHtcbiAgICAgIGxpc3QucHVzaChpdGVtc1tpXS50aXRsZSk7XG4gICAgfVxuICAgIFNvY2lhbFNoYXJlLnNoYXJlVGV4dChsaXN0LmpvaW4oXCIsIFwiKS50cmltKCkpO1xuICB9XG5cbiAgbG9nb2ZmKCkge1xuICAgIHRoaXMubG9naW5TZXJ2aWNlLmxvZ29mZigpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XG4gIH1cbn1cbiJdfQ==