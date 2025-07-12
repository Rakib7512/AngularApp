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
  sendCountryHub!: string;     
  sendDivisionHub!: string;     
  sendDistrictHub!: string;     
  sendPoliceStationHub!: string;
  reciveCountryHub!: string;     
  reciveDivisionHub!: string;     
  reciveDistrictHub!: string;    
  recivePoliceStationHub!: string;
  bookingAgent!:string; 


}