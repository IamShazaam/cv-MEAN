import { Component } from '@angular/core';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  cvData: any;

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.cvService.getCvData().subscribe((data) => {
      console.log(data);
      this.cvData = data;
    });
  }

}
