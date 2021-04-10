import { Component, OnInit } from '@angular/core';
import { IMission } from '../models/mission';
import { SpacexapiService } from '../network/spacexapi.service';
@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css'],
})
export class MissionlistComponent implements OnInit {
  missionList!: any[];
  selectedMission!: IMission;
  hideMissionList: boolean = false;

  constructor(private service: SpacexapiService) {}

  getMission(): void {
    this.service.getMission().subscribe((resp: any) => {
      this.missionList = resp;
    });
  }
  onSelect(mission: IMission): void {
    this.selectedMission = mission;
    this.hideMissionList = !this.hideMissionList;
  }

  displayMissionList(): void {
    this.hideMissionList = !this.hideMissionList;
  }

  ngOnInit(): void {
    this.getMission();
  }
}
