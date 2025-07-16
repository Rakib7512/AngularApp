export class RecParcelEmpDetModel {
    empId!: string;
    parcelId!: string;
    constructor(empId: string, parcelId: string) {
        this.empId = empId,
            this.parcelId = parcelId
    }
}
