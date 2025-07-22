import { Country } from "./country.module";
import { District } from "./district.model";
import { Division } from "./division.model";
import { PoliceStation } from "./policeStation.model";

export interface Hub {
  id?: number;
  name: string;
  countries: Country;
  divisions: Division;
  districts: District;
  policeStations: PoliceStation;
  hubName: string;
}