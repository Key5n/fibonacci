import { Test } from '@nestjs/testing';
import { FibService } from './fib.service';

describe('FibService', () => {
  let service: FibService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [FibService],
    }).compile();

    service = moduleRef.get<FibService>(FibService);
  });

  it('should return 0 for input 0', () => {
    expect(service.getFibNumber(0)).toEqual(0);
  });

  it('should return 1 for input 1', () => {
    expect(service.getFibNumber(1)).toEqual(1);
  });

  it('should return 1 for input 2', () => {
    expect(service.getFibNumber(2)).toEqual(1);
  });

  it('should return 2 for input 3', () => {
    expect(service.getFibNumber(3)).toEqual(2);
  });

  it('should return 3 for input 4', () => {
    expect(service.getFibNumber(4)).toEqual(3);
  });

  it('should return 55 for input 10', () => {
    expect(service.getFibNumber(10)).toEqual(55);
  });
});
