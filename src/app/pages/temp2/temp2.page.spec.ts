import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Temp2Page } from './temp2.page';

describe('Temp2Page', () => {
  let component: Temp2Page;
  let fixture: ComponentFixture<Temp2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Temp2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Temp2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
