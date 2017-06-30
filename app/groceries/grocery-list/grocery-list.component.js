"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils = require("utils/utils");
var shared_1 = require("../shared");
var shared_2 = require("../../shared");
var GroceryListComponent = (function () {
    function GroceryListComponent(store) {
        this.loading = new core_1.EventEmitter();
        this.loaded = new core_1.EventEmitter();
        this.listLoaded = false;
        this.store = store;
    }
    GroceryListComponent.prototype.load = function () {
        var _this = this;
        this.loading.next("");
        this.store.load()
            .subscribe(function () {
            _this.loaded.next("");
            _this.listLoaded = true;
        }, function () {
            shared_2.alert("An error occurred loading your grocery list.");
        });
    };
    // The following trick makes the background color of each cell
    // in the UITableView transparent as it’s created.
    GroceryListComponent.prototype.makeBackgroundTransparent = function (args) {
        var cell = args.ios;
        if (cell) {
            // support XCode 8
            cell.backgroundColor = utils.ios.getter(UIColor, UIColor.clearColor);
        }
    };
    GroceryListComponent.prototype.imageSource = function (book) {
        if (book.deleted) {
            //return book.done ? "res://selected" : "res://nonselected";
        }
        //return book.done ? "res://checked" : "res://unchecked";
    };
    GroceryListComponent.prototype.toggleDone = function (book) {
        if (book.deleted) {
            //book.done = !book.done;
            return;
        }
        this.store.toggleDoneFlag(book);
        /*.subscribe(
          () => { },
          () => {
            alert("An error occurred managing your grocery list.");
          }
        );
        */
    };
    GroceryListComponent.prototype.delete = function (book) {
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
    return GroceryListComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], GroceryListComponent.prototype, "showDeleted", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], GroceryListComponent.prototype, "row", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GroceryListComponent.prototype, "loading", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], GroceryListComponent.prototype, "loaded", void 0);
GroceryListComponent = __decorate([
    core_1.Component({
        selector: "gr-grocery-list",
        moduleId: module.id,
        templateUrl: "./grocery-list.component.html",
        styleUrls: ["./grocery-list.component.css"],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [shared_1.GroceryService])
], GroceryListComponent);
exports.GroceryListComponent = GroceryListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyb2NlcnktbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFDaEcsbUNBQXFDO0FBRXJDLG9DQUEyQztBQUUzQyx1Q0FBcUM7QUFXckMsSUFBYSxvQkFBb0I7SUFTL0IsOEJBQVksS0FBcUI7UUFOdkIsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzdCLFdBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUd0QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR2YsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELG1DQUFJLEdBQUo7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFO2FBQ2QsU0FBUyxDQUNSO1lBQ0UsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckIsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxFQUNEO1lBQ0UsY0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUNGLENBQUM7SUFDTixDQUFDO0lBRUQsOERBQThEO0lBQzlELGtEQUFrRDtJQUNsRCx3REFBeUIsR0FBekIsVUFBMEIsSUFBSTtRQUM1QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ3BCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDVCxrQkFBa0I7WUFDbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7SUFDSCxDQUFDO0lBRUQsMENBQVcsR0FBWCxVQUFZLElBQUk7UUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNqQiw0REFBNEQ7UUFDOUQsQ0FBQztRQUNELHlEQUF5RDtJQUMzRCxDQUFDO0lBRUQseUNBQVUsR0FBVixVQUFXLElBQVU7UUFDbkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakIseUJBQXlCO1lBQ3pCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM3Qjs7Ozs7O1VBTUU7SUFDTixDQUFDO0lBRUQscUNBQU0sR0FBTixVQUFPLElBQVU7UUFBakIsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLElBQUksY0FBYyxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQztRQUNoRCxJQUFJLFlBQVksR0FBRztZQUNqQixjQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztZQUNsRSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUM7UUFDRjs7Ozs7Ozs7O1VBU0U7SUFDSixDQUFDO0lBQ0gsMkJBQUM7QUFBRCxDQUFDLEFBOUVELElBOEVDO0FBN0VVO0lBQVIsWUFBSyxFQUFFOzt5REFBc0I7QUFDckI7SUFBUixZQUFLLEVBQUU7O2lEQUFLO0FBQ0g7SUFBVCxhQUFNLEVBQUU7O3FEQUE4QjtBQUM3QjtJQUFULGFBQU0sRUFBRTs7b0RBQTZCO0FBSjNCLG9CQUFvQjtJQVBoQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLCtCQUErQjtRQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztRQUMzQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO3FDQVVtQix1QkFBYztHQVR0QixvQkFBb0IsQ0E4RWhDO0FBOUVZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcblxuaW1wb3J0IHsgR3JvY2VyeVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBCb29rIH0gZnJvbSBcIi4uLy4uL21vZGVscy9ib29rXCJcbmltcG9ydCB7IGFsZXJ0IH0gZnJvbSBcIi4uLy4uL3NoYXJlZFwiO1xuXG5kZWNsYXJlIHZhciBVSUNvbG9yOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJnci1ncm9jZXJ5LWxpc3RcIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9ncm9jZXJ5LWxpc3QuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2dyb2NlcnktbGlzdC5jb21wb25lbnQuY3NzXCJdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBHcm9jZXJ5TGlzdENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHNob3dEZWxldGVkOiBib29sZWFuO1xuICBASW5wdXQoKSByb3c7XG4gIEBPdXRwdXQoKSBsb2FkaW5nID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgbG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHB1YmxpYyBzdG9yZTogR3JvY2VyeVNlcnZpY2U7XG4gIGxpc3RMb2FkZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihzdG9yZTogR3JvY2VyeVNlcnZpY2UpIHtcbiAgICAgIHRoaXMuc3RvcmUgPSBzdG9yZTtcbiAgfVxuXG4gIGxvYWQoKSB7XG4gICAgdGhpcy5sb2FkaW5nLm5leHQoXCJcIik7XG4gICAgdGhpcy5zdG9yZS5sb2FkKClcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLmxvYWRlZC5uZXh0KFwiXCIpO1xuICAgICAgICAgIHRoaXMubGlzdExvYWRlZCA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIGxvYWRpbmcgeW91ciBncm9jZXJ5IGxpc3QuXCIpO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgLy8gVGhlIGZvbGxvd2luZyB0cmljayBtYWtlcyB0aGUgYmFja2dyb3VuZCBjb2xvciBvZiBlYWNoIGNlbGxcbiAgLy8gaW4gdGhlIFVJVGFibGVWaWV3IHRyYW5zcGFyZW50IGFzIGl04oCZcyBjcmVhdGVkLlxuICBtYWtlQmFja2dyb3VuZFRyYW5zcGFyZW50KGFyZ3MpIHtcbiAgICBsZXQgY2VsbCA9IGFyZ3MuaW9zO1xuICAgIGlmIChjZWxsKSB7XG4gICAgICAvLyBzdXBwb3J0IFhDb2RlIDhcbiAgICAgIGNlbGwuYmFja2dyb3VuZENvbG9yID0gdXRpbHMuaW9zLmdldHRlcihVSUNvbG9yLCBVSUNvbG9yLmNsZWFyQ29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIGltYWdlU291cmNlKGJvb2spIHtcbiAgICBpZiAoYm9vay5kZWxldGVkKSB7XG4gICAgICAvL3JldHVybiBib29rLmRvbmUgPyBcInJlczovL3NlbGVjdGVkXCIgOiBcInJlczovL25vbnNlbGVjdGVkXCI7XG4gICAgfVxuICAgIC8vcmV0dXJuIGJvb2suZG9uZSA/IFwicmVzOi8vY2hlY2tlZFwiIDogXCJyZXM6Ly91bmNoZWNrZWRcIjtcbiAgfVxuXG4gIHRvZ2dsZURvbmUoYm9vazogQm9vaykge1xuICAgIGlmIChib29rLmRlbGV0ZWQpIHtcbiAgICAgIC8vYm9vay5kb25lID0gIWJvb2suZG9uZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0b3JlLnRvZ2dsZURvbmVGbGFnKGJvb2spXG4gICAgICAvKi5zdWJzY3JpYmUoXG4gICAgICAgICgpID0+IHsgfSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGFsZXJ0KFwiQW4gZXJyb3Igb2NjdXJyZWQgbWFuYWdpbmcgeW91ciBncm9jZXJ5IGxpc3QuXCIpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgKi9cbiAgfVxuXG4gIGRlbGV0ZShib29rOiBCb29rKSB7XG4gICAgdGhpcy5sb2FkaW5nLm5leHQoXCJcIik7XG4gICAgbGV0IHN1Y2Nlc3NIYW5kbGVyID0gKCkgPT4gdGhpcy5sb2FkZWQubmV4dChcIlwiKTtcbiAgICBsZXQgZXJyb3JIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBkZWxldGluZyBhbiBpdGVtIGZyb20geW91ciBsaXN0LlwiKTtcbiAgICAgIHRoaXMubG9hZGVkLm5leHQoXCJcIik7XG4gICAgfTtcbiAgICAvKlxuXG4gICAgaWYgKGJvb2suZGVsZXRlZCkge1xuICAgICAgdGhpcy5zdG9yZS5wZXJtYW5lbnRseURlbGV0ZShib29rKVxuICAgICAgICAuc3Vic2NyaWJlKHN1Y2Nlc3NIYW5kbGVyLCBlcnJvckhhbmRsZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN0b3JlLnNldERlbGV0ZUZsYWcoYm9vaylcbiAgICAgICAgLnN1YnNjcmliZShzdWNjZXNzSGFuZGxlciwgZXJyb3JIYW5kbGVyKTtcbiAgICB9XG4gICAgKi9cbiAgfVxufVxuXG4iXX0=