import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbstractModalPage } from './abstract-modal.page';

describe('AbstractModalPage', () => {
  let component: AbstractModalPage;
  let fixture: ComponentFixture<AbstractModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbstractModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbstractModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
