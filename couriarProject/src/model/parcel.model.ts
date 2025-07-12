export class Parcel {
  id?: string;
   trackingId!: string;
  senderName!: string;
  receiverName!: string;
  senderPhone!: string;
  receiverPhone!: string;
  senderAddress!: string;
  receiverAddress!: string;
  fromHub!: string;
  toHub!: string;
  status!: string;
  currentHub?: string;
  deliveryPerson?: string;
  createdAt?: Date;
}