import { Component } from '@angular/core';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  cvData: any;

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.cvService.getCvData().subscribe((data) => {
      console.log(data);
      this.cvData = data;
    });
  }

}
