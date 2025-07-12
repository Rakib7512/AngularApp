export interface HubTransfer {
  id?: number;
  parcelId: number;
  fromHub: string;
  toHub: string;
  departedAt: Date;
  arrivedAt: Date;
  currentHub:string;
  courierBy: string;
}