import { Division } from "./division.model";

export class Country {
  id: number;
  name: string;
  divisions: Division[];

  constructor(id: number, name: string, divisions: Division[] = []) {
    this.id = id;
    this.name = name;
    this.divisions = divisions;
  }
}