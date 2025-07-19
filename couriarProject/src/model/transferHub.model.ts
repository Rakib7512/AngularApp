export interface HubTransfer {
  id?: number;
  parcelId: string;
  fromHub: string;
  toHub: string;
  departedAt: string;
  currentHub: string;
  courierBy: string;
}
