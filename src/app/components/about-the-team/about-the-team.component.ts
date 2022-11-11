import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';
import { DataService } from '../../services/data.service'

@Component({
  selector: 'app-about-the-team',
  templateUrl: './about-the-team.component.html',
  styleUrls: ['./about-the-team.component.scss']
})
export class AboutTheTeamComponent implements OnInit {

  ourTeam = {
    team: 'FrontEnd',
    membersNames: [
      'Sai Aditya Viswanadham',
      'Kajal',
      'Sharavanan'
    ]
  };

  midTierTeam1 = {
    team: 'Mid Tier 1',
    membersNames: [
      'Abhishek',
      'Mishika',
      'Nanditha'
    ]
  };

  midTierTeam2 = {
    team: 'Mid Tier 2',
    membersNames: [
      'Sandeep',
      'Naman',
      'Preethi'
    ]
  };

  data: TreeNode[] = [];
  selectedNode: any;
  frontEndTeam: any = [];
  backEndTeam: any = [];
  midTierTeam: any = [];
  errorMessage = "";

  constructor(private ds: DataService) { }

  ngOnInit(): void {
    this.setTeams(this.ourTeam, this.frontEndTeam, 'p-1');

    this.setTeams(this.midTierTeam1, this.midTierTeam, 'p-2');
    this.setTeams(this.midTierTeam2, this.midTierTeam, 'p-2');

    this.getTeamInformation_1('toys', this.backEndTeam, 'p-3');
    this.getTeamInformation_1('bikes', this.backEndTeam, 'p-3');
    this.getTeamInformation_1('food', this.backEndTeam, 'p-3');
    this.getTeamInformation_2('books', this.backEndTeam, 'p-3');
    this.getTeamInformation_2('laptops', this.backEndTeam, 'p-3');
    this.getTeamInformation_2('dvds', this.backEndTeam, 'p-3');
  }

  getTeamInformation_1(productCategory: string, teamVariable: any, style: string): void {
    this.ds.getTeamData_1(productCategory).subscribe({
      next: (response) => {
        console.log('Response received');
        this.setTeams(response.data, teamVariable, style);
      },
      error: (error) => {
        console.error('Request failed with error');
        this.errorMessage = error;
      },
      complete: () => console.log("Request complete!")
    });
  }

  getTeamInformation_2(productCategory: string, teamVariable: any, style: string): void {
    this.ds.getTeamData_2(productCategory).subscribe({
      next: (response) => {
        console.log('Response received');
        this.setTeams(response.data, teamVariable, style);
      },
      error: (error) => {
        console.error('Request failed with error');
        this.errorMessage = error;
      },
      complete: () => console.log("Request complete!")
    });
  }

  setTeams(teamDetails: any, teamVariable: any, style: string): void {
    for (var j = 0; j < teamDetails.membersNames.length; j++) {
      teamVariable.push({
        label: teamDetails.team,
        type: 'person',
        styleClass: 'p-person ' + style,
        data: teamDetails.membersNames[j],
      })
    }
    this.buildTreeData();
  }

  buildTreeData(): void {
    this.data = [{
      label: 'Instructor',
      type: 'person',
      styleClass: 'p-person',
      expanded: true,
      data: 'Varun Gupta',
      children: [
        {
          label: 'FrontEnd',
          styleClass: 'department-1',
          expanded: false,
          children: this.frontEndTeam,
        },
        {
          label: 'MidTier',
          styleClass: 'department-2',
          expanded: false,
          children: this.midTierTeam,
        },
        {
          label: 'Backend',
          styleClass: 'department-3',
          expanded: false,
          children: this.backEndTeam,
        },
      ]
    }];
  }

  onNodeSelect(event: any) {
    console.log({ severity: 'success', summary: 'Node Selected', detail: event.node.label });
  }
}
