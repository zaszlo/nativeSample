"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var color_1 = require("color");
var connectivity_1 = require("connectivity");
var animation_1 = require("ui/animation");
var page_1 = require("ui/page");
var shared_1 = require("../shared");
var user_1 = require("../models/user");
var LoginComponent = (function () {
    function LoginComponent(router, userService, BackendService, page) {
        this.router = router;
        this.userService = userService;
        this.BackendService = BackendService;
        this.page = page;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.user.username = "l.zsigmond";
        this.user.passw = "qwe123";
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    LoginComponent.prototype.submit = function () {
        /*if (!this.user.isValidEmail()) {
          alert("Enter a valid email address.");
          return;
        }
        */
        this.isAuthenticating = true;
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            shared_1.alert("Groceries requires an internet connection to log in.");
            return;
        }
        console.log("Logging in with " + this.user.username + " & " + this.user.passw);
        this.userService.login(this.user)
            .subscribe(function () {
            _this.isAuthenticating = false;
            _this.router.navigate(["/"]);
        }, function (error) {
            console.log("Error, but: " + shared_1.BackendService.isLoggedIn());
            shared_1.alert("Unfortunately we could not find your account.");
            _this.isAuthenticating = false;
        });
    };
    LoginComponent.prototype.signUp = function () {
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            shared_1.alert("Groceries requires an internet connection to register.");
            return;
        }
        /*
            this.userService.register(this.user)
              .subscribe(
                () => {
                  alert("Your account was successfully created.");
                  this.isAuthenticating = false;
                  this.toggleDisplay();
                },
                (message) => {
                  // TODO: Verify this works
                  if (message.match(/same user/)) {
                    alert("This email address is already in use.");
                  } else {
                    alert("Unfortunately we were unable to create your account.");
                  }
                  this.isAuthenticating = false;
                }
              );
        */
    };
    LoginComponent.prototype.forgotPassword = function () {
        /*
        prompt({
          title: "Forgot Password",
          message: "Enter the email address you used to register for Groceries to reset your password.",
          defaultText: "",
          okButtonText: "Ok",
          cancelButtonText: "Cancel"
        }).then((data) => {
          if (data.result) {
            this.userService.resetPassword(data.text.trim())
              .subscribe(() => {
                alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
              }, () => {
                alert("Unfortunately, an error occurred resetting your password.");
              });
          }
        });
        */
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        var mainContainer = this.mainContainer.nativeElement;
        mainContainer.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 200
        });
    };
    LoginComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    LoginComponent.prototype.showMainContent = function () {
        var initialContainer = this.initialContainer.nativeElement;
        var mainContainer = this.mainContainer.nativeElement;
        var logoContainer = this.logoContainer.nativeElement;
        var formControls = this.formControls.nativeElement;
        var signUpStack = this.signUpStack.nativeElement;
        var animations = [];
        // Fade out the initial content over one half second
        initialContainer.animate({
            opacity: 0,
            duration: 500
        }).then(function () {
            // After the animation completes, hide the initial container and
            // show the main container and logo. The main container and logo will
            // not immediately appear because their opacity is set to 0 in CSS.
            initialContainer.style.visibility = "collapse";
            mainContainer.style.visibility = "visible";
            logoContainer.style.visibility = "visible";
            // Fade in the main container and logo over one half second.
            animations.push({ target: mainContainer, opacity: 1, duration: 500 });
            animations.push({ target: logoContainer, opacity: 1, duration: 500 });
            // Slide up the form controls and sign up container.
            animations.push({ target: signUpStack, translate: { x: 0, y: 0 }, opacity: 1, delay: 500, duration: 150 });
            animations.push({ target: formControls, translate: { x: 0, y: 0 }, opacity: 1, delay: 650, duration: 150 });
            // Kick off the animation queue
            new animation_1.Animation(animations, false).play();
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild("initialContainer"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "initialContainer", void 0);
__decorate([
    core_1.ViewChild("mainContainer"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "mainContainer", void 0);
__decorate([
    core_1.ViewChild("logoContainer"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "logoContainer", void 0);
__decorate([
    core_1.ViewChild("formControls"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "formControls", void 0);
__decorate([
    core_1.ViewChild("signUpStack"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "signUpStack", void 0);
__decorate([
    core_1.ViewChild("password"),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "password", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "i-login",
        moduleId: module.id,
        templateUrl: "./login.component.html",
        styleUrls: ["./login-common.css", "./login.component.css"],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        shared_1.LoginService,
        shared_1.BackendService,
        page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUN6QywrQkFBOEI7QUFDOUIsNkNBQWlFO0FBQ2pFLDBDQUF5QztBQUd6QyxnQ0FBK0I7QUFHL0Isb0NBQWdFO0FBQ2hFLHVDQUFzQztBQVF0QyxJQUFhLGNBQWM7SUFhekIsd0JBQW9CLE1BQWMsRUFDeEIsV0FBeUIsRUFDekIsY0FBOEIsRUFDOUIsSUFBVTtRQUhBLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQU07UUFkcEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBY3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxXQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0lBQzdCLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRTs7OztVQUlFO1FBRUYsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixD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S0M7QUExSmdDO0lBQTlCLGdCQUFTLENBQUMsa0JBQWtCLENBQUM7OEJBQW1CLGlCQUFVO3dEQUFDO0FBQ2hDO0lBQTNCLGdCQUFTLENBQUMsZUFBZSxDQUFDOzhCQUFnQixpQkFBVTtxREFBQztBQUMxQjtJQUEzQixnQkFBUyxDQUFDLGVBQWUsQ0FBQzs4QkFBZ0IsaUJBQVU7cURBQUM7QUFDM0I7SUFBMUIsZ0JBQVMsQ0FBQyxjQUFjLENBQUM7OEJBQWUsaUJBQVU7b0RBQUM7QUFDMUI7SUFBekIsZ0JBQVMsQ0FBQyxhQUFhLENBQUM7OEJBQWMsaUJBQVU7bURBQUM7QUFDM0I7SUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7OEJBQVcsaUJBQVU7Z0RBQUM7QUFYakMsY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFNBQVM7UUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsU0FBUyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsdUJBQXVCLENBQUM7S0FDM0QsQ0FBQztxQ0FjNEIsZUFBTTtRQUNYLHFCQUFZO1FBQ1QsdUJBQWM7UUFDeEIsV0FBSTtHQWhCVCxjQUFjLENBZ0sxQjtBQWhLWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IGNvbm5lY3Rpb25UeXBlLCBnZXRDb25uZWN0aW9uVHlwZSB9IGZyb20gXCJjb25uZWN0aXZpdHlcIjtcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuXG5pbXBvcnQgeyBhbGVydCwgTG9naW5TZXJ2aWNlLCBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWRcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vbW9kZWxzL3VzZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImktbG9naW5cIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbG9naW4tY29tbW9uLmNzc1wiLCBcIi4vbG9naW4uY29tcG9uZW50LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB1c2VyOiBVc2VyO1xuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG4gIGlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcblxuXG4gIEBWaWV3Q2hpbGQoXCJpbml0aWFsQ29udGFpbmVyXCIpIGluaXRpYWxDb250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJtYWluQ29udGFpbmVyXCIpIG1haW5Db250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJsb2dvQ29udGFpbmVyXCIpIGxvZ29Db250YWluZXI6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJmb3JtQ29udHJvbHNcIikgZm9ybUNvbnRyb2xzOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwic2lnblVwU3RhY2tcIikgc2lnblVwU3RhY2s6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IExvZ2luU2VydmljZSxcbiAgICBwcml2YXRlIEJhY2tlbmRTZXJ2aWNlOiBCYWNrZW5kU2VydmljZSxcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgdGhpcy51c2VyLnVzZXJuYW1lID0gXCJsLnpzaWdtb25kXCI7XG4gICAgdGhpcy51c2VyLnBhc3N3ID0gXCJxd2UxMjNcIjtcbiAgfVxuXG4gIGZvY3VzUGFzc3dvcmQoKSB7XG4gICAgdGhpcy5wYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgLyppZiAoIXRoaXMudXNlci5pc1ZhbGlkRW1haWwoKSkge1xuICAgICAgYWxlcnQoXCJFbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAqL1xuXG4gICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgdGhpcy5sb2dpbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNpZ25VcCgpO1xuICAgIH1cbiAgfVxuXG4gIGxvZ2luKCkge1xuICAgIGlmIChnZXRDb25uZWN0aW9uVHlwZSgpID09PSBjb25uZWN0aW9uVHlwZS5ub25lKSB7XG4gICAgICBhbGVydChcIkdyb2NlcmllcyByZXF1aXJlcyBhbiBpbnRlcm5ldCBjb25uZWN0aW9uIHRvIGxvZyBpbi5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiTG9nZ2luZyBpbiB3aXRoIFwiICsgdGhpcy51c2VyLnVzZXJuYW1lICsgXCIgJiBcIiArIHRoaXMudXNlci5wYXNzdylcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcilcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvXCJdKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciwgYnV0OiBcIiArIEJhY2tlbmRTZXJ2aWNlLmlzTG9nZ2VkSW4oKSk7XG4gICAgICAgICAgYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIik7XG4gICAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICk7XG4gIH1cblxuICBzaWduVXAoKSB7XG4gICAgaWYgKGdldENvbm5lY3Rpb25UeXBlKCkgPT09IGNvbm5lY3Rpb25UeXBlLm5vbmUpIHtcbiAgICAgIGFsZXJ0KFwiR3JvY2VyaWVzIHJlcXVpcmVzIGFuIGludGVybmV0IGNvbm5lY3Rpb24gdG8gcmVnaXN0ZXIuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbi8qXG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgYWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcbiAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAvLyBUT0RPOiBWZXJpZnkgdGhpcyB3b3Jrc1xuICAgICAgICAgIGlmIChtZXNzYWdlLm1hdGNoKC9zYW1lIHVzZXIvKSkge1xuICAgICAgICAgICAgYWxlcnQoXCJUaGlzIGVtYWlsIGFkZHJlc3MgaXMgYWxyZWFkeSBpbiB1c2UuXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICApO1xuKi8gICAgICBcbiAgfVxuXG4gIGZvcmdvdFBhc3N3b3JkKCkge1xuICBcdC8qXG4gICAgcHJvbXB0KHtcbiAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgR3JvY2VyaWVzIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXG4gICAgICBkZWZhdWx0VGV4dDogXCJcIixcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxuICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0UGFzc3dvcmQoZGF0YS50ZXh0LnRyaW0oKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBwYXNzd29yZCB3YXMgc3VjY2Vzc2Z1bGx5IHJlc2V0LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgaW5zdHJ1Y3Rpb25zIG9uIGNob29zaW5nIGEgbmV3IHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHksIGFuIGVycm9yIG9jY3VycmVkIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAqL1xuICB9XG5cbiAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XG4gICAgbGV0IG1haW5Db250YWluZXIgPSA8Vmlldz50aGlzLm1haW5Db250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICBtYWluQ29udGFpbmVyLmFuaW1hdGUoe1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmlzTG9nZ2luZ0luID8gbmV3IENvbG9yKFwid2hpdGVcIikgOiBuZXcgQ29sb3IoXCIjMzAxMjE3XCIpLFxuICAgICAgZHVyYXRpb246IDIwMFxuICAgIH0pO1xuICB9XG5cbiAgc3RhcnRCYWNrZ3JvdW5kQW5pbWF0aW9uKGJhY2tncm91bmQpIHtcbiAgICBiYWNrZ3JvdW5kLmFuaW1hdGUoe1xuICAgICAgc2NhbGU6IHsgeDogMS4wLCB5OiAxLjAgfSxcbiAgICAgIGR1cmF0aW9uOiAxMDAwMFxuICAgIH0pO1xuICB9XG5cbiAgc2hvd01haW5Db250ZW50KCkge1xuICAgIGxldCBpbml0aWFsQ29udGFpbmVyID0gPFZpZXc+dGhpcy5pbml0aWFsQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IG1haW5Db250YWluZXIgPSA8Vmlldz50aGlzLm1haW5Db250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgbG9nb0NvbnRhaW5lciA9IDxWaWV3PnRoaXMubG9nb0NvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgIGxldCBmb3JtQ29udHJvbHMgPSA8Vmlldz50aGlzLmZvcm1Db250cm9scy5uYXRpdmVFbGVtZW50O1xuICAgIGxldCBzaWduVXBTdGFjayA9IDxWaWV3PnRoaXMuc2lnblVwU3RhY2submF0aXZlRWxlbWVudDtcbiAgICBsZXQgYW5pbWF0aW9ucyA9IFtdO1xuXG4gICAgLy8gRmFkZSBvdXQgdGhlIGluaXRpYWwgY29udGVudCBvdmVyIG9uZSBoYWxmIHNlY29uZFxuICAgIGluaXRpYWxDb250YWluZXIuYW5pbWF0ZSh7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgZHVyYXRpb246IDUwMFxuICAgIH0pLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAvLyBBZnRlciB0aGUgYW5pbWF0aW9uIGNvbXBsZXRlcywgaGlkZSB0aGUgaW5pdGlhbCBjb250YWluZXIgYW5kXG4gICAgICAvLyBzaG93IHRoZSBtYWluIGNvbnRhaW5lciBhbmQgbG9nby4gVGhlIG1haW4gY29udGFpbmVyIGFuZCBsb2dvIHdpbGxcbiAgICAgIC8vIG5vdCBpbW1lZGlhdGVseSBhcHBlYXIgYmVjYXVzZSB0aGVpciBvcGFjaXR5IGlzIHNldCB0byAwIGluIENTUy5cbiAgICAgIGluaXRpYWxDb250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICAgIG1haW5Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgbG9nb0NvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG5cbiAgICAgIC8vIEZhZGUgaW4gdGhlIG1haW4gY29udGFpbmVyIGFuZCBsb2dvIG92ZXIgb25lIGhhbGYgc2Vjb25kLlxuICAgICAgYW5pbWF0aW9ucy5wdXNoKHsgdGFyZ2V0OiBtYWluQ29udGFpbmVyLCBvcGFjaXR5OiAxLCBkdXJhdGlvbjogNTAwIH0pO1xuICAgICAgYW5pbWF0aW9ucy5wdXNoKHsgdGFyZ2V0OiBsb2dvQ29udGFpbmVyLCBvcGFjaXR5OiAxLCBkdXJhdGlvbjogNTAwIH0pO1xuXG4gICAgICAvLyBTbGlkZSB1cCB0aGUgZm9ybSBjb250cm9scyBhbmQgc2lnbiB1cCBjb250YWluZXIuXG4gICAgICBhbmltYXRpb25zLnB1c2goeyB0YXJnZXQ6IHNpZ25VcFN0YWNrLCB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LCBvcGFjaXR5OiAxLCBkZWxheTogNTAwLCBkdXJhdGlvbjogMTUwIH0pO1xuICAgICAgYW5pbWF0aW9ucy5wdXNoKHsgdGFyZ2V0OiBmb3JtQ29udHJvbHMsIHRyYW5zbGF0ZTogeyB4OiAwLCB5OiAwIH0sIG9wYWNpdHk6IDEsIGRlbGF5OiA2NTAsIGR1cmF0aW9uOiAxNTAgfSk7XG5cbiAgICAgIC8vIEtpY2sgb2ZmIHRoZSBhbmltYXRpb24gcXVldWVcbiAgICAgIG5ldyBBbmltYXRpb24oYW5pbWF0aW9ucywgZmFsc2UpLnBsYXkoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19