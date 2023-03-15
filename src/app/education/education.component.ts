import { Component } from '@angular/core';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  cvData: any;

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.cvService.getCvData().subscribe((data) => {
      console.log(data);
      this.cvData = data;
    });
  }
}
