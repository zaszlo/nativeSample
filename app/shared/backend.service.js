"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_settings_1 = require("application-settings");
var tokenKey = "token";
var BackendService = (function () {
    function BackendService() {
    }
    //static apiUrl = "http://localhost:4200/inventory/api/";
    BackendService.isLoggedIn = function () {
        return !!application_settings_1.getString("token");
    };
    Object.defineProperty(BackendService, "token", {
        get: function () {
            return application_settings_1.getString("token");
        },
        set: function (theToken) {
            application_settings_1.setString("token", theToken);
            console.log("token set: " + theToken);
        },
        enumerable: true,
        configurable: true
    });
    return BackendService;
}());
BackendService.apiUrl = "http://192.168.0.104:8080/inventory/api/";
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNkRBQTREO0FBRTVELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUV6QjtJQUFBO0lBZ0JBLENBQUM7SUFkQyx5REFBeUQ7SUFFbEQseUJBQVUsR0FBakI7UUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHNCQUFXLHVCQUFLO2FBQWhCO1lBQ0UsTUFBTSxDQUFDLGdDQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsQ0FBQzthQUVELFVBQWlCLFFBQWdCO1lBQy9CLGdDQUFTLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7OztPQUxBO0lBTUgscUJBQUM7QUFBRCxDQUFDLEFBaEJEO0FBQ1MscUJBQU0sR0FBRywwQ0FBMEMsQ0FBQztBQURoRCx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuY29uc3QgdG9rZW5LZXkgPSBcInRva2VuXCI7XG5cbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XG4gIHN0YXRpYyBhcGlVcmwgPSBcImh0dHA6Ly8xOTIuMTY4LjAuMTA0OjgwODAvaW52ZW50b3J5L2FwaS9cIjtcbiAgLy9zdGF0aWMgYXBpVXJsID0gXCJodHRwOi8vbG9jYWxob3N0OjQyMDAvaW52ZW50b3J5L2FwaS9cIjtcblxuICBzdGF0aWMgaXNMb2dnZWRJbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFnZXRTdHJpbmcoXCJ0b2tlblwiKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdG9rZW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwidG9rZW5cIik7XG4gIH1cblxuICBzdGF0aWMgc2V0IHRva2VuKHRoZVRva2VuOiBzdHJpbmcpIHtcbiAgICBzZXRTdHJpbmcoXCJ0b2tlblwiLCB0aGVUb2tlbik7XG4gICAgY29uc29sZS5sb2coXCJ0b2tlbiBzZXQ6IFwiICsgdGhlVG9rZW4pO1xuICB9XG59XG4iXX0=