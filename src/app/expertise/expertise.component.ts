import { Component } from '@angular/core';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.css']
})
export class ExpertiseComponent {
  cvData: any;

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.cvService.getCvData().subscribe((data) => {
      console.log(data);
      this.cvData = data;
    });
  }

}
