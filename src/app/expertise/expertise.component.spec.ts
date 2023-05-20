import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertiseComponent } from './expertise.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CvService } from '../cv.service';

describe('ExpertiseComponent', () => {
  let component: ExpertiseComponent;
  let fixture: ComponentFixture<ExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ExpertiseComponent ],
      providers: [CvService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
