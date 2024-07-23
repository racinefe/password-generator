import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiedDialogComponent } from './copied-dialog.component';

describe('CopiedDialogComponent', () => {
  let component: CopiedDialogComponent;
  let fixture: ComponentFixture<CopiedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopiedDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CopiedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
