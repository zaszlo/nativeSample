"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/map");
var shared_1 = require("../../shared");
var BookService = (function () {
    function BookService(http, zone) {
        this.http = http;
        this.zone = zone;
        this.items = new BehaviorSubject_1.BehaviorSubject([]);
        this.allItems = [];
        this.page = 1;
        this.ftitle = null;
        this.fauthor = null;
        this.ftag = null;
    }
    BookService.prototype.load = function (sort, rows, direction) {
        var _this = this;
        var filter = {};
        if (this.page == null) {
            filter['page'] = 1;
        }
        else {
            filter['page'] = this.page;
        }
        if (sort == null) {
            filter['sort'] = 'title';
        }
        else {
            filter['sort'] = sort;
        }
        if (rows == null) {
            filter['rows'] = 10;
        }
        else {
            filter['rows'] = rows;
        }
        if (direction == null) {
            filter['direction'] = "ASC";
        }
        else {
            filter['direction'] = direction;
        }
        if (this.ftitle != null) {
            filter['ftitle'] = this.ftitle;
        }
        if (this.fauthor != null) {
            filter['fauthor'] = this.fauthor;
        }
        if (this.ftag != null) {
            filter['ftag'] = this.ftag;
        }
        var headers = this.getHeaders();
        console.log("headers are ready");
        return this.http.post(shared_1.BackendService.apiUrl + "book/table", filter, {
            headers: headers
        })
            .map(function (data) {
            console.log("data ready");
            data.json().content.forEach(function (book) {
                if (!book.deleted) {
                    console.log("allItems.push is coming");
                    _this.allItems.push(book);
                    console.log("publishUpdates is coming");
                    _this.publishUpdates();
                }
            });
        })
            .catch(this.handleErrors);
    };
    BookService.prototype.getAuthorNames = function () {
        var names = null;
        var headers = this.getHeaders();
        /*
        
        names = names.join(', ');
        */
        this.http.get(shared_1.BackendService.apiUrl + 'author/list', { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var authors = data;
            names = authors.map(function (item) { return item.name; });
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
        return names;
    };
    BookService.prototype.getTagNames = function () {
        var names = null;
        var headers = this.getHeaders();
        /*
        
        names = names.join(', ');
        */
        this.http.get(shared_1.BackendService.apiUrl + 'tag/list', { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var authors = data;
            names = authors.map(function (item) { return item.name; });
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json().error || 'Server error'); });
        return names;
    };
    BookService.prototype.add = function (name) {
        /*
        return this.http.post(
          BackendService.apiUrl + "Books",
          JSON.stringify({ Name: name }),
          { headers: this.getHeaders() }
        )
        .map(res => res.json())
        .map(data => {
          this.allItems.unshift(new Book(data.Result.Id, name, false, false));
          this.publishUpdates();
        })
        .catch(this.handleErrors);
        */
    };
    BookService.prototype.setDeleteFlag = function (item) {
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
    BookService.prototype.toggleDoneFlag = function (item) {
        /*
        item.done = !item.done;
        this.publishUpdates();
        return this.put(item.id, { Done: item.done })
          .map(res => res.json());
          */
    };
    BookService.prototype.restore = function () {
        /*
        let indeces = [];
        this.allItems.forEach((book) => {
          if (book.deleted && book.done) {
            indeces.push(book.id);
          }
        });
    
        let headers = this.getHeaders();
        headers.append("X-Everlive-Filter", JSON.stringify({
          "Id": {
            "$in": indeces
          }
        }));
    
        return this.http.put(
          BackendService.apiUrl + "Books",
          JSON.stringify({
            Deleted: false,
            Done: false
          }),
          { headers: headers }
        )
        .map(res => res.json())
        .map(data => {
          this.allItems.forEach((book) => {
            if (book.deleted && book.done) {
              book.deleted = false;
              book.done = false;
            }
          });
          this.publishUpdates();
        })
        .catch(this.handleErrors);
        */
    };
    BookService.prototype.permanentlyDelete = function (item) {
        /*
        return this.http
          .delete(
            BackendService.apiUrl + "Books/" + item.id,
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
    BookService.prototype.put = function (id, data) {
        /*
        return this.http.put(
          BackendService.apiUrl + "Books/" + id,
          JSON.stringify(data),
          { headers: this.getHeaders() }
        )
        .catch(this.handleErrors);
        */
    };
    BookService.prototype.publishUpdates = function () {
        var _this = this;
        // Make sure all updates are published inside NgZone so that change detection is triggered if needed
        this.zone.run(function () {
            // must emit a *new* value (immutability!)
            _this.items.next(_this.allItems.slice());
        });
    };
    BookService.prototype.getHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Bearer " + shared_1.BackendService.token);
        return headers;
    };
    BookService.prototype.handleErrors = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    return BookService;
}());
BookService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, core_1.NgZone])
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYm9vay5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBQ25ELHNDQUF5RTtBQUN6RSw4Q0FBNkM7QUFDN0Msd0RBQXVEO0FBQ3ZELGlDQUErQjtBQUUvQix1Q0FBOEM7QUFJOUMsSUFBYSxXQUFXO0lBU3RCLHFCQUFvQixJQUFVLEVBQVUsSUFBWTtRQUFoQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQVJwRCxVQUFLLEdBQWlDLElBQUksaUNBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUV0RCxhQUFRLEdBQWdCLEVBQUUsQ0FBQztRQUM1QixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLFdBQU0sR0FBVyxJQUFJLENBQUM7UUFDdEIsWUFBTyxHQUFXLElBQUksQ0FBQztRQUN2QixTQUFJLEdBQVcsSUFBSSxDQUFDO0lBRTZCLENBQUM7SUFFekQsMEJBQUksR0FBSixVQUFLLElBQVksRUFBRSxJQUFZLEVBQUUsU0FBaUI7UUFBbEQsaUJBa0RDO1FBakRDLElBQUksTUFBTSxHQUFRLEVBQUUsQ0FBQztRQUNyQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM3QixDQUFDO1FBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZixNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQzdCLENBQUM7UUFBQyxJQUFJLENBQUEsQ0FBQztZQUNMLE1BQU0sQ0FBQyxNQUFNLENB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bXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFJlc3BvbnNlT3B0aW9ucyB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anMvQmVoYXZpb3JTdWJqZWN0XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9tYXBcIjtcblxuaW1wb3J0IHsgQmFja2VuZFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBCb29rIH0gZnJvbSBcIi4uLy4uL21vZGVscy9ib29rXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBCb29rU2VydmljZSB7XG4gIGl0ZW1zOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8Qm9vaz4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cbiAgcHJpdmF0ZSBhbGxJdGVtczogQXJyYXk8Qm9vaz4gPSBbXTtcbiAgcHVibGljIHBhZ2U6IG51bWJlciA9IDE7XG4gIHB1YmxpYyBmdGl0bGU6IHN0cmluZyA9IG51bGw7XG4gIHB1YmxpYyBmYXV0aG9yOiBzdHJpbmcgPSBudWxsO1xuICBwdWJsaWMgZnRhZzogc3RyaW5nID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgem9uZTogTmdab25lKSB7IH1cblxuICBsb2FkKHNvcnQ6IHN0cmluZywgcm93czogbnVtYmVyLCBkaXJlY3Rpb246IHN0cmluZykge1xuICAgIGxldCBmaWx0ZXI6IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLnBhZ2UgPT0gbnVsbCkge1xuICAgICAgZmlsdGVyWydwYWdlJ10gPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXJbJ3BhZ2UnXSA9IHRoaXMucGFnZTtcbiAgICB9XG4gICAgaWYgKHNvcnQgPT0gbnVsbCkge1xuICAgICAgICBmaWx0ZXJbJ3NvcnQnXSA9ICd0aXRsZSc7XG4gICAgfSBlbHNle1xuICAgICAgZmlsdGVyWydzb3J0J10gPSBzb3J0O1xuICAgIH1cbiAgICBpZiAocm93cyA9PSBudWxsKSB7XG4gICAgICAgIGZpbHRlclsncm93cyddID0gMTA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlclsncm93cyddID0gcm93cztcbiAgICB9XG4gICAgaWYgKGRpcmVjdGlvbiA9PSBudWxsKSB7XG4gICAgICAgIGZpbHRlclsnZGlyZWN0aW9uJ10gPSBcIkFTQ1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaWx0ZXJbJ2RpcmVjdGlvbiddID0gZGlyZWN0aW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5mdGl0bGUgIT0gbnVsbCkge1xuICAgICAgICBmaWx0ZXJbJ2Z0aXRsZSddID0gdGhpcy5mdGl0bGU7XG4gICAgfVxuICAgIGlmICh0aGlzLmZhdXRob3IgIT0gbnVsbCkge1xuICAgICAgICBmaWx0ZXJbJ2ZhdXRob3InXSA9IHRoaXMuZmF1dGhvcjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZnRhZyAhPSBudWxsKSB7XG4gICAgICAgIGZpbHRlclsnZnRhZyddID0gdGhpcy5mdGFnO1xuICAgIH1cbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuZ2V0SGVhZGVycygpO1xuICAgIGNvbnNvbGUubG9nKFwiaGVhZGVycyBhcmUgcmVhZHlcIik7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KEJhY2tlbmRTZXJ2aWNlLmFwaVVybCArIFwiYm9vay90YWJsZVwiLCBmaWx0ZXIsIHtcbiAgICAgIGhlYWRlcnM6IGhlYWRlcnNcbiAgICB9KVxuICAgIC5tYXAoZGF0YSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImRhdGEgcmVhZHlcIik7XG4gICAgICBkYXRhLmpzb24oKS5jb250ZW50LmZvckVhY2goKGJvb2spID0+IHtcbiAgICAgICAgaWYgKCFib29rLmRlbGV0ZWQpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImFsbEl0ZW1zLnB1c2ggaXMgY29taW5nXCIpO1xuICAgICAgICB0aGlzLmFsbEl0ZW1zLnB1c2goXG4gICAgICAgICAgYm9va1xuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZyhcInB1Ymxpc2hVcGRhdGVzIGlzIGNvbWluZ1wiKTtcbiAgICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cblxuICBnZXRBdXRob3JOYW1lcygpOiBhbnkge1xuICAgIGxldCBuYW1lczogYW55ID0gbnVsbDtcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuZ2V0SGVhZGVycygpO1xuICAgIC8qXG4gICAgXG4gICAgbmFtZXMgPSBuYW1lcy5qb2luKCcsICcpO1xuICAgICovXG4gICAgdGhpcy5odHRwLmdldChCYWNrZW5kU2VydmljZS5hcGlVcmwgKyAnYXV0aG9yL2xpc3QnLCB7aGVhZGVyc30pXG4gICAgICAgIC5tYXAoKHJlczogUmVzcG9uc2UpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC5tYXAoIGRhdGEgPT4ge1xuICAgICAgICAgIGxldCBhdXRob3JzID0gZGF0YTtcbiAgICAgICAgICBuYW1lcyA9IGF1dGhvcnMubWFwKGl0ZW0gPT4gaXRlbS5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy8uZG8ocmVzID0+IGNvbnNvbGUubG9nKHJlcykpXG4gICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvci5qc29uKCkuZXJyb3IgfHwgJ1NlcnZlciBlcnJvcicpKTtcbiAgICByZXR1cm4gbmFtZXM7XG4gIH1cbiAgZ2V0VGFnTmFtZXMoKTogYW55IHtcbiAgICBsZXQgbmFtZXM6IGFueSA9IG51bGw7XG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmdldEhlYWRlcnMoKTtcbiAgICAvKlxuICAgIFxuICAgIG5hbWVzID0gbmFtZXMuam9pbignLCAnKTtcbiAgICAqL1xuICAgIHRoaXMuaHR0cC5nZXQoQmFja2VuZFNlcnZpY2UuYXBpVXJsICsgJ3RhZy9saXN0Jywge2hlYWRlcnN9KVxuICAgICAgICAubWFwKChyZXM6IFJlc3BvbnNlKSA9PiByZXMuanNvbigpKVxuICAgICAgICAubWFwKCBkYXRhID0+IHtcbiAgICAgICAgICBsZXQgYXV0aG9ycyA9IGRhdGE7XG4gICAgICAgICAgbmFtZXMgPSBhdXRob3JzLm1hcChpdGVtID0+IGl0ZW0ubmFtZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC8vLmRvKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICAgICAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IE9ic2VydmFibGUudGhyb3coZXJyb3IuanNvbigpLmVycm9yIHx8ICdTZXJ2ZXIgZXJyb3InKSk7XG4gICAgcmV0dXJuIG5hbWVzO1xuICB9XG5cblxuICBhZGQobmFtZTogc3RyaW5nKSB7XG4gICAgLypcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICBCYWNrZW5kU2VydmljZS5hcGlVcmwgKyBcIkJvb2tzXCIsXG4gICAgICBKU09OLnN0cmluZ2lmeSh7IE5hbWU6IG5hbWUgfSksXG4gICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycygpIH1cbiAgICApXG4gICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAubWFwKGRhdGEgPT4ge1xuICAgICAgdGhpcy5hbGxJdGVtcy51bnNoaWZ0KG5ldyBCb29rKGRhdGEuUmVzdWx0LklkLCBuYW1lLCBmYWxzZSwgZmFsc2UpKTtcbiAgICAgIHRoaXMucHVibGlzaFVwZGF0ZXMoKTtcbiAgICB9KVxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgKi9cbiAgfVxuXG4gIHNldERlbGV0ZUZsYWcoaXRlbTogQm9vaykge1xuICAgIC8qXG4gICAgcmV0dXJuIHRoaXMucHV0KGl0ZW0uaWQsIHsgRGVsZXRlZDogdHJ1ZSwgRG9uZTogZmFsc2UgfSlcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAubWFwKGRhdGEgPT4ge1xuICAgICAgICBpdGVtLmRlbGV0ZWQgPSB0cnVlO1xuICAgICAgICBpdGVtLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgICAgfSk7XG4gICAgICAqL1xuICB9XG5cbiAgdG9nZ2xlRG9uZUZsYWcoaXRlbTogQm9vaykge1xuICAgIC8qXG4gICAgaXRlbS5kb25lID0gIWl0ZW0uZG9uZTtcbiAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgcmV0dXJuIHRoaXMucHV0KGl0ZW0uaWQsIHsgRG9uZTogaXRlbS5kb25lIH0pXG4gICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICAgICovXG4gIH1cblxuICByZXN0b3JlKCkge1xuICAgIC8qXG4gICAgbGV0IGluZGVjZXMgPSBbXTtcbiAgICB0aGlzLmFsbEl0ZW1zLmZvckVhY2goKGJvb2spID0+IHtcbiAgICAgIGlmIChib29rLmRlbGV0ZWQgJiYgYm9vay5kb25lKSB7XG4gICAgICAgIGluZGVjZXMucHVzaChib29rLmlkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5nZXRIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJYLUV2ZXJsaXZlLUZpbHRlclwiLCBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBcIklkXCI6IHtcbiAgICAgICAgXCIkaW5cIjogaW5kZWNlc1xuICAgICAgfVxuICAgIH0pKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KFxuICAgICAgQmFja2VuZFNlcnZpY2UuYXBpVXJsICsgXCJCb29rc1wiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBEZWxldGVkOiBmYWxzZSxcbiAgICAgICAgRG9uZTogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH1cbiAgICApXG4gICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAubWFwKGRhdGEgPT4ge1xuICAgICAgdGhpcy5hbGxJdGVtcy5mb3JFYWNoKChib29rKSA9PiB7XG4gICAgICAgIGlmIChib29rLmRlbGV0ZWQgJiYgYm9vay5kb25lKSB7XG4gICAgICAgICAgYm9vay5kZWxldGVkID0gZmFsc2U7XG4gICAgICAgICAgYm9vay5kb25lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgIH0pXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICAqL1xuICB9XG5cbiAgcGVybWFuZW50bHlEZWxldGUoaXRlbTogQm9vaykge1xuICAgIC8qXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmRlbGV0ZShcbiAgICAgICAgQmFja2VuZFNlcnZpY2UuYXBpVXJsICsgXCJCb29rcy9cIiArIGl0ZW0uaWQsXG4gICAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRIZWFkZXJzKCkgfVxuICAgICAgKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5tYXAoZGF0YSA9PiB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuYWxsSXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgdGhpcy5hbGxJdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICAgICovXG4gIH1cblxuICBwcml2YXRlIHB1dChpZDogc3RyaW5nLCBkYXRhOiBPYmplY3QpIHtcbiAgICAvKlxuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KFxuICAgICAgQmFja2VuZFNlcnZpY2UuYXBpVXJsICsgXCJCb29rcy9cIiArIGlkLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0SGVhZGVycygpIH1cbiAgICApXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICAqL1xuICB9XG5cbiAgcHJpdmF0ZSBwdWJsaXNoVXBkYXRlcygpIHtcbiAgICAvLyBNYWtlIHN1cmUgYWxsIHVwZGF0ZXMgYXJlIHB1Ymxpc2hlZCBpbnNpZGUgTmdab25lIHNvIHRoYXQgY2hhbmdlIGRldGVjdGlvbiBpcyB0cmlnZ2VyZWQgaWYgbmVlZGVkXG4gICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAvLyBtdXN0IGVtaXQgYSAqbmV3KiB2YWx1ZSAoaW1tdXRhYmlsaXR5ISlcbiAgICAgIHRoaXMuaXRlbXMubmV4dChbLi4udGhpcy5hbGxJdGVtc10pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRIZWFkZXJzKCkge1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJBdXRob3JpemF0aW9uXCIsIFwiQmVhcmVyIFwiICsgQmFja2VuZFNlcnZpY2UudG9rZW4pO1xuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgfVxufSJdfQ==