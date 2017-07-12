"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemStatusPipe = (function () {
    function ItemStatusPipe() {
        this.value = [];
    }
    ItemStatusPipe.prototype.transform = function (items, deleted) {
        if (items && items.length) {
            this.value = items.filter(function (book) {
                return book.deleted === deleted;
            });
        }
        return this.value;
    };
    return ItemStatusPipe;
}());
ItemStatusPipe = __decorate([
    core_1.Pipe({
        name: "itemStatus"
    })
], ItemStatusPipe);
exports.ItemStatusPipe = ItemStatusPipe;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS1zdGF0dXMucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0tc3RhdHVzLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBb0Q7QUFPcEQsSUFBYSxjQUFjO0lBSDNCO1FBSUUsVUFBSyxHQUFnQixFQUFFLENBQUM7SUFTMUIsQ0FBQztJQVJDLGtDQUFTLEdBQVQsVUFBVSxLQUFrQixFQUFFLE9BQWdCO1FBQzVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFVO2dCQUNuQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxPQUFPLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUM7QUFWWSxjQUFjO0lBSDFCLFdBQUksQ0FBQztRQUNKLElBQUksRUFBRSxZQUFZO0tBQ25CLENBQUM7R0FDVyxjQUFjLENBVTFCO0FBVlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgQm9vayB9IGZyb20gXCIuLi9zaGFyZWRcIjtcblxuQFBpcGUoe1xuICBuYW1lOiBcIml0ZW1TdGF0dXNcIlxufSlcbmV4cG9ydCBjbGFzcyBJdGVtU3RhdHVzUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB2YWx1ZTogQXJyYXk8Qm9vaz4gPSBbXTtcbiAgdHJhbnNmb3JtKGl0ZW1zOiBBcnJheTxCb29rPiwgZGVsZXRlZDogYm9vbGVhbikge1xuICAgIGlmIChpdGVtcyAmJiBpdGVtcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBpdGVtcy5maWx0ZXIoKGJvb2s6IEJvb2spID0+IHtcbiAgICAgICAgcmV0dXJuIGJvb2suZGVsZXRlZCA9PT0gZGVsZXRlZDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxufSJdfQ==