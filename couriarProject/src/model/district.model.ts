export class District{
    id!: string;
    nama!:string;
    policeStations!:string[];
    constructor(id:string,name:string,policeStations:string[]=[]){
        this.id=id;
        this.nama=name;
        this.policeStations=policeStations

    }
}