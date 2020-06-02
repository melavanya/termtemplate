import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Temp1Page } from './temp1.page';

describe('Temp1Page', () => {
  let component: Temp1Page;
  let fixture: ComponentFixture<Temp1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temp1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Temp1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
