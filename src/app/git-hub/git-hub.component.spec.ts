import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubComponent } from './git-hub.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CvService } from '../cv.service';

describe('GitHubComponent', () => {
  let component: GitHubComponent;
  let fixture: ComponentFixture<GitHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ GitHubComponent ],
      providers: [CvService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GitHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
