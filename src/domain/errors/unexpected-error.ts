export class UnexpectedError extends Error {
  constructor () {
    super('Algo de erro aconteceu. Tente novamente em breve')
    this.name = 'UnexpectedError'
  }
}
