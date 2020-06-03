import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab_CestComponent } from './tab_cest.component';

describe('Tab_CestComponent', () => {
  let component: Tab_CestComponent;
  let fixture: ComponentFixture<Tab_CestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab_CestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab_CestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
