import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PipesModule } from 'src/app/shared/pipes/pipes.module';

import { HomeCardComponent } from './home-card.component';

describe('HomeCardComponent', () => {
  let component: HomeCardComponent;
  let fixture: ComponentFixture<HomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCardComponent],
      imports: [PipesModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit product when click', () => {
    const buyButton = fixture.debugElement.query(By.css('.buy-btn'))
      .nativeElement as HTMLElement;
      const onBuyNowEventSpy = spyOn(component.onBuyNow, 'emit');
    buyButton.click();
    expect(onBuyNowEventSpy).toHaveBeenCalled();
  });
});
