import { Injectable } from '@nestjs/common';

@Injectable()
export class FibService {
  private multiplyMatrix(A: bigint[][], B: bigint[][]): bigint[][] {
    const result: bigint[][] = [
      [0n, 0n],
      [0n, 0n],
    ];

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
          result[i][j] += A[i][k] * B[k][j];
        }
      }
    }

    return result;
  }

  // 2分累乗法：O(log n)
  private power(F: bigint[][], n: number): bigint[][] {
    let result: bigint[][] = [
      [1n, 0n],
      [0n, 1n],
    ];

    while (n > 0) {
      if (n % 2 === 1) {
        result = this.multiplyMatrix(result, F);
      }
      F = this.multiplyMatrix(F, F);
      n = Math.floor(n / 2);
    }

    return result;
  }

  /**
   * @param n 整数
   * @returns フィボナッチ数列の第n項
   */
  getFibNumber(n: number): number {
    if (n === 0) {
      return 0;
    }

    let F: bigint[][] = [
      [1n, 1n],
      [1n, 0n],
    ];
    // 2分累乗法による計算
    F = this.power(F, n - 1);

    return Number(F[0][0]);
  }
}
