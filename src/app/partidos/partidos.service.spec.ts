/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PartidosService } from './partidos.service';

describe('Service: Partidos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PartidosService]
    });
  });

  it('should ...', inject([PartidosService], (service: PartidosService) => {
    expect(service).toBeTruthy();
  }));
});
