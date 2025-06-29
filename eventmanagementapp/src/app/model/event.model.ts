import { Time } from "@angular/common";
import { Data } from "@angular/router";


export class Event{
    id!:number;
    title!: string;
    descriptin ! :string;
    date!:Data;
    time!:Time;
    location!:Location;
    created_by!:string;

    
}