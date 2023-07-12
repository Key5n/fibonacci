import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { FibService } from './fib.service';

@Controller('fib')
export class FibController {
  constructor(private readonly fibService: FibService) {}

  @Get()
  getFibNumber(@Query('n') n: string): { result: number } {
    const nAsNumber = Number(n);

    // nが数値でない場合、負の値の場合はエラー
    if (isNaN(nAsNumber) || nAsNumber < 0 || !Number.isInteger(nAsNumber)) {
      throw new BadRequestException(
        '入力値が不正です。入力は負でない整数を入力して下さい。',
      );
    }

    return { result: this.fibService.getFibNumber(nAsNumber) };
  }
}
