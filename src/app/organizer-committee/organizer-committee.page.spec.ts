import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OrganizerCommitteePage } from './organizer-committee.page';

describe('OrganizerCommitteePage', () => {
  let component: OrganizerCommitteePage;
  let fixture: ComponentFixture<OrganizerCommitteePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizerCommitteePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OrganizerCommitteePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
