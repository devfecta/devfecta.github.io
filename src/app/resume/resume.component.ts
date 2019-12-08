import { Component, OnInit } from '@angular/core';
import { ResumeDataService } from '../resume-data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

    constructor(private resumeData: ResumeDataService) { }

    jobs : object = this.resumeData.data['jobs'];
    technologies : object = this.resumeData.data['technologies'];
    clients : object = this.resumeData.data['clients'];

    ngOnInit() { }

}
