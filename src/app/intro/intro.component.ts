import { Component } from '@angular/core';
import { CvService } from '../cv.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  cvData: any;

  constructor(private cvService: CvService) { }

  ngOnInit(): void {
    this.cvService.getCvData().subscribe((data) => {
      console.log(data);
      this.cvData = data;
    });
  }
}
