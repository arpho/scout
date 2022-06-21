import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorItemsPage } from './selector-items.page';
import { ModalController, AngularDelegate, NavParams } from '@ionic/angular';
import { MockNavParams } from './mockNavParams';
import { FilterItemsPipe } from '../../pipes/filter-items.pipe';
import { SorterItemsPipe } from '../../pipes/sorter-items.pipe';
import { ModalsService } from '../../services/modals/modals-service';

describe('SelectorItemsPage', () => {
  let component: SelectorItemsPage;
  let fixture: ComponentFixture<SelectorItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectorItemsPage, FilterItemsPipe, SorterItemsPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      
      providers: [ModalController,
         AngularDelegate,
         ModalController,
         NavParams,
         ModalsService,
         ModalController,
         NavParams,
         ModalsService,
        { provide: NavParams, useClass: MockNavParams }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
