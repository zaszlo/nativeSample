import { Pipe, PipeTransform } from "@angular/core";

import { Book } from "../shared";

@Pipe({
  name: "itemStatus"
})
export class ItemStatusPipe implements PipeTransform {
  value: Array<Book> = [];
  transform(items: Array<Book>, deleted: boolean) {
    if (items && items.length) {
      this.value = items.filter((book: Book) => {
        return book.deleted === deleted;
      });
    }
    return this.value;
  }
}