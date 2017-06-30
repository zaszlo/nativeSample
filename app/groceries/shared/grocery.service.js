"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/map");
var shared_1 = require("../../shared");
var book_1 = require("../../models/book");
var GroceryService = (function () {
    function GroceryService(http, zone) {
        this.http = http;
        this.zone = zone;
        this.items = new BehaviorSubject_1.BehaviorSubject([]);
        this.allItems = [];
    }
    GroceryService.prototype.load = function () {
        var _this = this;
        var filter;
        filter['page'] = 1;
        filter['rows'] = 10;
        filter['sort'] = 'title';
        var headers = this.getHeaders();
        return this.http.post(shared_1.BackendService.apiUrl + "table", filter, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            data.content.forEach(function (book) {
                _this.allItems.push(new book_1.Book(book.id, book.title, book.authors));
                _this.publishUpdates();
            });
        })
            .catch(this.handleErrors);
    };
    GroceryService.prototype.add = function (name) {
        /*
        return this.http.post(
          BackendService.apiUrl + "Groceries",
          JSON.stringify({ Name: name }),
          { headers: this.getHeaders() }
        )
        .map(res => res.json())
        .map(data => {
          this.allItems.unshift(new Grocery(data.Result.Id, name, false, false));
          this.publishUpdates();
        })
        .catch(this.handleErrors);
        */
    };
    GroceryService.prototype.setDeleteFlag = function (item) {
        /*
        return this.put(item.id, { Deleted: true, Done: false })
          .map(res => res.json())
          .map(data => {
            item.deleted = true;
            item.done = false;
            this.publishUpdates();
          });
          */
    };
    GroceryService.prototype.toggleDoneFlag = function (item) {
        /*
        item.done = !item.done;
        this.publishUpdates();
        return this.put(item.id, { Done: item.done })
          .map(res => res.json());
          */
    };
    GroceryService.prototype.restore = function () {
        /*
        let indeces = [];
        this.allItems.forEach((grocery) => {
          if (grocery.deleted && grocery.done) {
            indeces.push(grocery.id);
          }
        });
    
        let headers = this.getHeaders();
        headers.append("X-Everlive-Filter", JSON.stringify({
          "Id": {
            "$in": indeces
          }
        }));
    
        return this.http.put(
          BackendService.apiUrl + "Groceries",
          JSON.stringify({
            Deleted: false,
            Done: false
          }),
          { headers: headers }
        )
        .map(res => res.json())
        .map(data => {
          this.allItems.forEach((grocery) => {
            if (grocery.deleted && grocery.done) {
              grocery.deleted = false;
              grocery.done = false;
            }
          });
          this.publishUpdates();
        })
        .catch(this.handleErrors);
        */
    };
    GroceryService.prototype.permanentlyDelete = function (item) {
        /*
        return this.http
          .delete(
            BackendService.apiUrl + "Groceries/" + item.id,
            { headers: this.getHeaders() }
          )
          .map(res => res.json())
          .map(data => {
            let index = this.allItems.indexOf(item);
            this.allItems.splice(index, 1);
            this.publishUpdates();
          })
          .catch(this.handleErrors);
          */
    };
    GroceryService.prototype.put = function (id, data) {
        /*
        return this.http.put(
          BackendService.apiUrl + "Groceries/" + id,
          JSON.stringify(data),
          { headers: this.getHeaders() }
        )
        .catch(this.handleErrors);
        */
    };
    GroceryService.prototype.publishUpdates = function () {
        /*
        // Make sure all updates are published inside NgZone so that change detection is triggered if needed
        this.zone.run(() => {
          // must emit a *new* value (immutability!)
          this.items.next([...this.allItems]);
        });
        */
    };
    GroceryService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + shared_1.BackendService.token);
        return headers;
    };
    GroceryService.prototype.handleErrors = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    return GroceryService;
}());
GroceryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, core_1.NgZone])
], GroceryService);
exports.GroceryService = GroceryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JvY2VyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBQ25ELHNDQUF5RTtBQUN6RSw4Q0FBNkM7QUFDN0Msd0RBQXVEO0FBQ3ZELGlDQUErQjtBQUUvQix1Q0FBOEM7QUFDOUMsMENBQXlDO0FBR3pDLElBQWEsY0FBYztJQUt6Qix3QkFBb0IsSUFBVSxFQUFVLElBQVk7UUFBaEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVE7UUFKcEQsVUFBSyxHQUFpQyxJQUFJLGlDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFFdEQsYUFBUSxHQUFnQixFQUFFLENBQUM7SUFFcUIsQ0FBQztJQUV6RCw2QkFBSSxHQUFKO1FBQUEsaUJBdUJDO1FBdEJDLElBQUksTUFBVyxDQUFDO1FBQ2hCLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNwQixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsdUJBQWMsQ0FBQyxNQUFNLEdBQUcsT0FBTyxFQUFFLE1BQU0sRUFBRTtZQUM3RCxPQUFPLEVBQUUsT0FBTztTQUNqQixDQUFDO2FBQ0QsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUN4QixLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDaEIsSUFBSSxXQUFJLENBQ04sSUFBSSxDQUFDLEVBQUUsRUFDUCxJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxPQUFPLENBQ2IsQ0FDRixDQUFDO2dCQUNGLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN4QixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELDRCQUFHLEdBQUgsVUFBSSxJQUFZO1FBQ2Q7Ozs7Ozs7Ozs7OztVQVlFO0lBQ0osQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxJQUFVO1FBQ3RCOzs7Ozs7OztZQVFJO0lBQ04sQ0FBQztJQUVELHVDQUFjLEdBQWQsVUFBZSxJQUFVO1FBQ3ZCOzs7OztZQUtJO0lBQ04sQ0FBQztJQUVELGdDQUFPLEdBQVA7UUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQWtDRTtJQUNKLENBQUM7SUFFRCwwQ0FBaUIsR0FBakIsVUFBa0IsSUFBVTtRQUMxQjs7Ozs7Ozs7Ozs7OztZQWFJO0lBQ04sQ0FBQztJQUVPLDRCQUFHLEdBQVgsVUFBWSxFQUFVLEVBQUUsSUFBWTtRQUNsQzs7Ozs7OztVQU9FO0lBQ0osQ0FBQztJQUVPLHVDQUFjLEdBQXRCO1FBQ0U7Ozs7OztVQU1FO0lBQ0osQ0FBQztJQUVPLG1DQUFVLEdBQWxCO1FBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyx1QkFBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDakIsQ0FBQztJQUVPLHFDQUFZLEdBQXBCLFVBQXFCLEtBQWU7UUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTVKRCxJQTRKQztBQTVKWSxjQUFjO0lBRDFCLGlCQUFVLEVBQUU7cUNBTWUsV0FBSSxFQUFnQixhQUFNO0dBTHpDLGNBQWMsQ0E0SjFCO0FBNUpZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlLCBSZXNwb25zZU9wdGlvbnMgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gXCJyeGpzL0JlaGF2aW9yU3ViamVjdFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZFwiO1xuaW1wb3J0IHsgQm9vayB9IGZyb20gXCIuLi8uLi9tb2RlbHMvYm9va1wiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JvY2VyeVNlcnZpY2Uge1xuICBpdGVtczogQmVoYXZpb3JTdWJqZWN0PEFycmF5PEJvb2s+PiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXG4gIHByaXZhdGUgYWxsSXRlbXM6IEFycmF5PEJvb2s+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XG5cbiAgbG9hZCgpIHtcbiAgICBsZXQgZmlsdGVyOiBhbnk7XG4gICAgZmlsdGVyWydwYWdlJ10gPSAxO1xuICAgIGZpbHRlclsncm93cyddID0gMTA7XG4gICAgZmlsdGVyWydzb3J0J10gPSAndGl0bGUnO1xuICAgIGxldCBoZWFkZXJzID0gdGhpcy5nZXRIZWFkZXJzKCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEJhY2tlbmRTZXJ2aWNlLmFwaVVybCArIFwidGFibGVcIiwgZmlsdGVyLCB7XG4gICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgfSlcbiAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC5tYXAoZGF0YSA9PiB7XG4gICAgICBkYXRhLmNvbnRlbnQuZm9yRWFjaCgoYm9vaykgPT4ge1xuICAgICAgICB0aGlzLmFsbEl0ZW1zLnB1c2goXG4gICAgICAgICAgbmV3IEJvb2soXG4gICAgICAgICAgICBib29rLmlkLFxuICAgICAgICAgICAgYm9vay50aXRsZSxcbiAgICAgICAgICAgIGJvb2suYXV0aG9yc1xuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG5cbiAgYWRkKG5hbWU6IHN0cmluZykge1xuICAgIC8qXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgQmFja2VuZFNlcnZpY2UuYXBpVXJsICsgXCJHcm9jZXJpZXNcIixcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgTmFtZTogbmFtZSB9KSxcbiAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRIZWFkZXJzKCkgfVxuICAgIClcbiAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC5tYXAoZGF0YSA9PiB7XG4gICAgICB0aGlzLmFsbEl0ZW1zLnVuc2hpZnQobmV3IEdyb2NlcnkoZGF0YS5SZXN1bHQuSWQsIG5hbWUsIGZhbHNlLCBmYWxzZSkpO1xuICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgIH0pXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICAqL1xuICB9XG5cbiAgc2V0RGVsZXRlRmxhZyhpdGVtOiBCb29rKSB7XG4gICAgLypcbiAgICByZXR1cm4gdGhpcy5wdXQoaXRlbS5pZCwgeyBEZWxldGVkOiB0cnVlLCBEb25lOiBmYWxzZSB9KVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5tYXAoZGF0YSA9PiB7XG4gICAgICAgIGl0ZW0uZGVsZXRlZCA9IHRydWU7XG4gICAgICAgIGl0ZW0uZG9uZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgICB9KTtcbiAgICAgICovXG4gIH1cblxuICB0b2dnbGVEb25lRmxhZyhpdGVtOiBCb29rKSB7XG4gICAgLypcbiAgICBpdGVtLmRvbmUgPSAhaXRlbS5kb25lO1xuICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcbiAgICByZXR1cm4gdGhpcy5wdXQoaXRlbS5pZCwgeyBEb25lOiBpdGVtLmRvbmUgfSlcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpO1xuICAgICAgKi9cbiAgfVxuXG4gIHJlc3RvcmUoKSB7XG4gICAgLypcbiAgICBsZXQgaW5kZWNlcyA9IFtdO1xuICAgIHRoaXMuYWxsSXRlbXMuZm9yRWFjaCgoZ3JvY2VyeSkgPT4ge1xuICAgICAgaWYgKGdyb2NlcnkuZGVsZXRlZCAmJiBncm9jZXJ5LmRvbmUpIHtcbiAgICAgICAgaW5kZWNlcy5wdXNoKGdyb2NlcnkuaWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIlgtRXZlcmxpdmUtRmlsdGVyXCIsIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIFwiSWRcIjoge1xuICAgICAgICBcIiRpblwiOiBpbmRlY2VzXG4gICAgICB9XG4gICAgfSkpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoXG4gICAgICBCYWNrZW5kU2VydmljZS5hcGlVcmwgKyBcIkdyb2Nlcmllc1wiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBEZWxldGVkOiBmYWxzZSxcbiAgICAgICAgRG9uZTogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH1cbiAgICApXG4gICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAubWFwKGRhdGEgPT4ge1xuICAgICAgdGhpcy5hbGxJdGVtcy5mb3JFYWNoKChncm9jZXJ5KSA9PiB7XG4gICAgICAgIGlmIChncm9jZXJ5LmRlbGV0ZWQgJiYgZ3JvY2VyeS5kb25lKSB7XG4gICAgICAgICAgZ3JvY2VyeS5kZWxldGVkID0gZmFsc2U7XG4gICAgICAgICAgZ3JvY2VyeS5kb25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgIH0pXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICAqL1xuICB9XG5cbiAgcGVybWFuZW50bHlEZWxldGUoaXRlbTogQm9vaykge1xuICAgIC8qXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmRlbGV0ZShcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuYXBpVXJsICsgXCJHcm9jZXJpZXMvXCIgKyBpdGVtLmlkLFxuICAgICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycygpIH1cbiAgICAgIClcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAubWFwKGRhdGEgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmFsbEl0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIHRoaXMuYWxsSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgICAqL1xuICB9XG5cbiAgcHJpdmF0ZSBwdXQoaWQ6IHN0cmluZywgZGF0YTogT2JqZWN0KSB7XG4gICAgLypcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dChcbiAgICAgIEJhY2tlbmRTZXJ2aWNlLmFwaVVybCArIFwiR3JvY2VyaWVzL1wiICsgaWQsXG4gICAgICBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRIZWFkZXJzKCkgfVxuICAgIClcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICAgICovXG4gIH1cblxuICBwcml2YXRlIHB1Ymxpc2hVcGRhdGVzKCkge1xuICAgIC8qXG4gICAgLy8gTWFrZSBzdXJlIGFsbCB1cGRhdGVzIGFyZSBwdWJsaXNoZWQgaW5zaWRlIE5nWm9uZSBzbyB0aGF0IGNoYW5nZSBkZXRlY3Rpb24gaXMgdHJpZ2dlcmVkIGlmIG5lZWRlZFxuICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgLy8gbXVzdCBlbWl0IGEgKm5ldyogdmFsdWUgKGltbXV0YWJpbGl0eSEpXG4gICAgICB0aGlzLml0ZW1zLm5leHQoWy4uLnRoaXMuYWxsSXRlbXNdKTtcbiAgICB9KTtcbiAgICAqL1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIZWFkZXJzKCkge1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgQmFja2VuZFNlcnZpY2UudG9rZW4pO1xuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgfVxufSJdfQ==