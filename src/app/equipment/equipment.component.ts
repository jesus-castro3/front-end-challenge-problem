import { Component, OnInit } from '@angular/core';
import { EquipmentService } from '../equipment.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  equipmentList: Array<[]>;

  constructor(private _http: EquipmentService) { }

  ngOnInit() {
    this._http.getEquipment().subscribe( (data: []) => {
      this.equipmentList = data.filter(e => e.active && typeof e.equipment_photos === 'object');
      console.log(data);
    })
  }

}
