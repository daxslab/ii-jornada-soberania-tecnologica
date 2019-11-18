import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EventProtocolPage } from './event-protocol.page';

describe('EventProtocolPage', () => {
  let component: EventProtocolPage;
  let fixture: ComponentFixture<EventProtocolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventProtocolPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EventProtocolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
