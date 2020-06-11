import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrecionPage } from './precion.page';

describe('PrecionPage', () => {
  let component: PrecionPage;
  let fixture: ComponentFixture<PrecionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrecionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrecionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
