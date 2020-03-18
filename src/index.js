class SDK {
  constructor() {
    this.developer = 'yingxu.wang';
  }

  requestDeveloper() {
    return this.developer;
  }
}

const sdk = new SDK();

const result = sdk.requestDeveloper();

console.log(result);