export class Page {
    constructor(
    public content: any,
    public last: boolean,
    public totalPages: number,
    public totalElements: number,
    public sort: any,
    public numberOfElements: number,
    public first: boolean,
    public size: number,
    public number: number
    ) { }
}
