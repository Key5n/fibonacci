import { Test, TestingModule } from '@nestjs/testing';
import { FibController } from './fib.controller';
import { FibService } from './fib.service';
import { BadRequestException } from '@nestjs/common';

describe('FibController', () => {
  let fibController: FibController;
  let fibService: FibService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FibController],
      providers: [FibService],
    }).compile();

    fibController = app.get<FibController>(FibController);
    fibService = app.get<FibService>(FibService);
  });

  it('should return a number when n is a valid non-negative integer', () => {
    const fibNumber = 5;
    jest.spyOn(fibService, 'getFibNumber').mockImplementation(() => fibNumber);

    expect(fibController.getFibNumber('5')).toBe(fibNumber);
    expect(fibService.getFibNumber).toHaveBeenCalledWith(5);
  });

  it('should throw a BadRequestException when n is not a valid non-negative integer', () => {
    expect(() => fibController.getFibNumber('invalid')).toThrow(
      BadRequestException,
    );
    expect(() => fibController.getFibNumber('-1')).toThrow(BadRequestException);
    expect(() => fibController.getFibNumber('1.5')).toThrow(
      BadRequestException,
    );
  });
});
