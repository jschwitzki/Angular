import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab_CestPrimengComponent } from './tab_cest-primeng.component';

describe('Tab_CestPrimengComponent', () => {
  let component: Tab_CestPrimengComponent;
  let fixture: ComponentFixture<Tab_CestPrimengComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab_CestPrimengComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab_CestPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
