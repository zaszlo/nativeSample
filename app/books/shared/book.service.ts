import { Injectable, NgZone } from "@angular/core";
import { Http, Headers, Response, ResponseOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import "rxjs/add/operator/map";

import { BackendService } from "../../shared";
import { Book } from "../../models/book";

@Injectable()
export class BookService {
  items: BehaviorSubject<Array<Book>> = new BehaviorSubject([]);

  private allItems: Array<Book> = [];
  public page: number = 1;
  public ftitle: string = null;
  public fauthor: string = null;
  public ftag: string = null;

  constructor(private http: Http, private zone: NgZone) { }

  load(sort: string, rows: number, direction: string) {
    let filter: any = {};
    if (this.page == null) {
      filter['page'] = 1;
    } else {
      filter['page'] = this.page;
    }
    if (sort == null) {
        filter['sort'] = 'title';
    } else{
      filter['sort'] = sort;
    }
    if (rows == null) {
        filter['rows'] = 10;
    } else {
      filter['rows'] = rows;
    }
    if (direction == null) {
        filter['direction'] = "ASC";
    } else {
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
    let headers = this.getHeaders();
    console.log("headers are ready");
    return this.http.post(BackendService.apiUrl + "book/table", filter, {
      headers: headers
    })
    .map(data => {
      console.log("data ready");
      data.json().content.forEach((book) => {
        if (!book.deleted){
        console.log("allItems.push is coming");
        this.allItems.push(
          book
        );
        console.log("publishUpdates is coming");
        this.publishUpdates();
        }
      });
    })
    .catch(this.handleErrors);
  }

  getAuthorNames(): any {
    let names: any = null;
    let headers = this.getHeaders();
    /*
    
    names = names.join(', ');
    */
    this.http.get(BackendService.apiUrl + 'author/list', {headers})
        .map((res: Response) => res.json())
        .map( data => {
          let authors = data;
          names = authors.map(item => item.name);
        })
        //.do(res => console.log(res))
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    return names;
  }
  getTagNames(): any {
    let names: any = null;
    let headers = this.getHeaders();
    /*
    
    names = names.join(', ');
    */
    this.http.get(BackendService.apiUrl + 'tag/list', {headers})
        .map((res: Response) => res.json())
        .map( data => {
          let authors = data;
          names = authors.map(item => item.name);
        })
        //.do(res => console.log(res))
        .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    return names;
  }


  add(name: string) {
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
  }

  setDeleteFlag(item: Book) {
    /*
    return this.put(item.id, { Deleted: true, Done: false })
      .map(res => res.json())
      .map(data => {
        item.deleted = true;
        item.done = false;
        this.publishUpdates();
      });
      */
  }

  toggleDoneFlag(item: Book) {
    /*
    item.done = !item.done;
    this.publishUpdates();
    return this.put(item.id, { Done: item.done })
      .map(res => res.json());
      */
  }

  restore() {
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
  }

  permanentlyDelete(item: Book) {
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
  }

  private put(id: string, data: Object) {
    /*
    return this.http.put(
      BackendService.apiUrl + "Books/" + id,
      JSON.stringify(data),
      { headers: this.getHeaders() }
    )
    .catch(this.handleErrors);
    */
  }

  private publishUpdates() {
    // Make sure all updates are published inside NgZone so that change detection is triggered if needed
    this.zone.run(() => {
      // must emit a *new* value (immutability!)
      this.items.next([...this.allItems]);
    });
  }

  private getHeaders() {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", "Bearer " + BackendService.token);
    return headers;
  }

  private handleErrors(error: Response) {
    console.log(error);
    return Observable.throw(error);
  }
}