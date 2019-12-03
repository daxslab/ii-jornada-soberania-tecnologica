import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VoteLinksComponent } from './vote-links.component';

describe('VoteLinksComponent', () => {
  let component: VoteLinksComponent;
  let fixture: ComponentFixture<VoteLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteLinksComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VoteLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
