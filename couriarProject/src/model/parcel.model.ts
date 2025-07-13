export class Parcel {
  id?: string;
  trackingId?: string;
  senderName!: string;
  receiverName!: string;
  senderPhone!: string;
  receiverPhone!: string;
  senderAddress!: string;
  receiverAddress!: string;
  status!: string;
  currentHub?: string;
  deliveryPerson?: string;
  createdAt?: Date;
   bookingAgent!:string; 
   countries! : string;
   divisions!: string;
   policeStations!:string;
   districts!:string


}