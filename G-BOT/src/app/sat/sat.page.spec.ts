import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SatPage } from './sat.page';

describe('SatPage', () => {
  let component: SatPage;
  let fixture: ComponentFixture<SatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
