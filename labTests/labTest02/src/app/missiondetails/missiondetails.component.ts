import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IMission } from '../models/mission';
@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css'],
})
export class MissiondetailsComponent implements OnInit {
  @Input() mission!: IMission;
  @Output() displayMissionList: EventEmitter<any> = new EventEmitter();
  testing!: any[];
  hideDetails: boolean = false;

  constructor() {}

  showMissionList(): void {
    this.hideDetails = !this.hideDetails;
    this.displayMissionList.emit();
  }

  showDetails(): void {
    this.hideDetails = false;
  }

  ngOnInit(): void {}
}
