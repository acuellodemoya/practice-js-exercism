export class Squares {
  constructor(n) {
    this.n = n;
  }

  get sumOfSquares() {
    let response = 0;
    for(let i = 1 ; i <= this.n; i++){
      response += i**2;
    }
    return response;
  }

  get squareOfSum() {
    let response = 0;
    for(let i = 1 ; i <= this.n; i++){
      response += i;
    }
    return response**2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
