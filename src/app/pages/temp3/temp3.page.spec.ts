import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Temp3Page } from './temp3.page';

describe('Temp3Page', () => {
  let component: Temp3Page;
  let fixture: ComponentFixture<Temp3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temp3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Temp3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
