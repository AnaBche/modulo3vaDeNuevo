import { TestBed } from '@angular/core/testing';
import { ServiCurriculumService } from './servi-curriculum.service';

describe('ServiCurriculumService', () => {
  let service: ServiCurriculumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiCurriculumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
