"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/catch");
var backend_service_1 = require("./backend.service");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.register = function (user) {
        /*
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
    
        return this.http.post(
          BackendService.apiUrl + "Users",
          JSON.stringify({
            Username: user.email,
            Email: user.email,
            Password: user.password
          }),
          { headers: headers }
        )
        .catch(this.handleErrors);
        */
    };
    LoginService.prototype.login = function (user) {
        var headers = new http_1.Headers();
        //headers.append( 'Content-Type', 'application/x-www-form-urlencoded' );
        //headers.append( 'Content-Type', 'application/form-data' );
        headers.append('Authorization', 'Basic aW52ZW50b3J5OmludmVudG9yeV9zZWNyZXQ=');
        var body = new http_1.URLSearchParams();
        body.set('password', user.passw);
        body.set('username', user.username);
        body.set('grant_type', 'password');
        body.set('scope', "read,write,trust");
        body.set('client_secret', 'inventory_secret');
        body.set('client_id', 'inventory');
        return this.http.post(backend_service_1.BackendService.apiUrl + "oauth/token", body, { headers: headers })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            backend_service_1.BackendService.token = data.access_token;
        })
            .catch(this.handleErrors);
    };
    LoginService.prototype.logoff = function () {
        backend_service_1.BackendService.token = "";
    };
    LoginService.prototype.resetPassword = function (email) {
        /*
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
    
        return this.http.post(
          BackendService.apiUrl + "Users/resetpassword",
          JSON.stringify({
            Email: email
          }),
          { headers: headers }
        ).catch(this.handleErrors);
        */
    };
    LoginService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXlFO0FBQ3pFLDhDQUE2QztBQUM3QyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBQy9CLHFDQUFtQztBQUNuQyxtQ0FBaUM7QUFHakMscURBQW1EO0FBR25ELElBQWEsWUFBWTtJQUN2QixzQkFBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07SUFBSSxDQUFDO0lBRW5DLCtCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2pCOzs7Ozs7Ozs7Ozs7OztVQWNFO0lBQ0osQ0FBQztJQUVELDRCQUFLLEdBQUwsVUFBTSxJQUFVO1FBQ2QsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1Qix3RUFBd0U7UUFDeEUsNERBQTREO1FBQzVELE9BQU8sQ0FBQyxNQUFNLENBQUUsZUFBZSxFQUFFLDRDQUE0QyxDQUFFLENBQUM7UUFDaEYsSUFBTSxJQUFJLEdBQUcsSUFBSSxzQkFBZSxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxHQUFHLENBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxDQUFFLFlBQVksRUFBRSxVQUFVLENBQUUsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFFLE9BQU8sRUFBRSxrQkFBa0IsQ0FBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUUsZUFBZSxFQUFFLGtCQUFrQixDQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBRSxXQUFXLEVBQUUsV0FBVyxDQUFFLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixnQ0FBYyxDQUFDLE1BQU0sR0FBRyxhQUFhLEVBQ3JDLElBQUksRUFDSixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FDckI7YUFDQSxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2FBQ2hDLEVBQUUsQ0FBQyxVQUFBLElBQUk7WUFDTixnQ0FBYyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FDSixJQUFJLENBQUMsWUFBWSxDQUNoQixDQUFDO0lBQ04sQ0FBQztJQUVELDZCQUFNLEdBQU47UUFDRSxnQ0FBYyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELG9DQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2pCOzs7Ozs7Ozs7OztVQVdFO0lBQ0osQ0FBQztJQUVELG1DQUFZLEdBQVosVUFBYSxLQUFlO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0gsbUJBQUM7QUFBRCxDQUFDLEFBdEVELElBc0VDO0FBdEVZLFlBQVk7SUFEeEIsaUJBQVUsRUFBRTtxQ0FFZSxXQUFJO0dBRG5CLFlBQVksQ0FzRXhCO0FBdEVZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSwgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9jYXRjaFwiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVscy91c2VyXCI7XG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL2JhY2tlbmQuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTG9naW5TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7IH1cblxuICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XG4gICAgLypcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgQmFja2VuZFNlcnZpY2UuYXBpVXJsICsgXCJVc2Vyc1wiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBVc2VybmFtZTogdXNlci5lbWFpbCxcbiAgICAgICAgRW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgIFBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICB9KSxcbiAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9XG4gICAgKVxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgKi9cbiAgfVxuXG4gIGxvZ2luKHVzZXI6IFVzZXIpIHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgLy9oZWFkZXJzLmFwcGVuZCggJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnICk7XG4gICAgLy9oZWFkZXJzLmFwcGVuZCggJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9mb3JtLWRhdGEnICk7XG4gICAgaGVhZGVycy5hcHBlbmQoICdBdXRob3JpemF0aW9uJywgJ0Jhc2ljIGFXNTJaVzUwYjNKNU9tbHVkbVZ1ZEc5eWVWOXpaV055WlhRPScgKTtcbiAgICBjb25zdCBib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICBib2R5LnNldCggJ3Bhc3N3b3JkJywgdXNlci5wYXNzdyApO1xuICAgICAgICBib2R5LnNldCggJ3VzZXJuYW1lJywgdXNlci51c2VybmFtZSApO1xuICAgICAgICBib2R5LnNldCggJ2dyYW50X3R5cGUnLCAncGFzc3dvcmQnICk7XG4gICAgICAgIGJvZHkuc2V0KCAnc2NvcGUnLCBcInJlYWQsd3JpdGUsdHJ1c3RcIiApO1xuICAgICAgICBib2R5LnNldCggJ2NsaWVudF9zZWNyZXQnLCAnaW52ZW50b3J5X3NlY3JldCcgKTtcbiAgICAgICAgYm9keS5zZXQoICdjbGllbnRfaWQnLCAnaW52ZW50b3J5JyApO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgIEJhY2tlbmRTZXJ2aWNlLmFwaVVybCArIFwib2F1dGgvdG9rZW5cIixcbiAgICAgIGJvZHksXG4gICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxuICAgIClcbiAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuZG8oZGF0YSA9PiB7XG4gICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IGRhdGEuYWNjZXNzX3Rva2VuO1xuICAgIH0pXG4gICAgLmNhdGNoKFxuICAgICAgdGhpcy5oYW5kbGVFcnJvcnNcbiAgICAgICk7XG4gIH1cblxuICBsb2dvZmYoKSB7XG4gICAgQmFja2VuZFNlcnZpY2UudG9rZW4gPSBcIlwiO1xuICB9XG5cbiAgcmVzZXRQYXNzd29yZChlbWFpbCkge1xuICAgIC8qXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgIEJhY2tlbmRTZXJ2aWNlLmFwaVVybCArIFwiVXNlcnMvcmVzZXRwYXNzd29yZFwiLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBFbWFpbDogZW1haWxcbiAgICAgIH0pLFxuICAgICAgeyBoZWFkZXJzOiBoZWFkZXJzIH1cbiAgICApLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICAqL1xuICB9XG5cbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgfVxufVxuIl19