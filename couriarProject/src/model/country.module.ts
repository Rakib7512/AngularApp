export class Country{

    id!:string;
    name!:string;
    division!:string[];
    constructor(id: string, name: string, divisions: string[] = []){
        this.id=id;
        this.name=name;
        this.division=divisions;



    }
}