export class Book {
  constructor(
    public id: string,
    public name: string,
    public done: boolean,
    public deleted: boolean
  ) {}
}