//WE DONT USE ANGULAR BUILT IN FUNCTIONS WE INSTANTIATE OBJECTS INSTEAD

export class ErrorClass {
  constructor() {}

  public checkArgs(...args: any): boolean {
    if (args.length !== 2 || args[0] === undefined || args[1] === undefined) {
      console.error(
        `2 Args Must Be Passed. One Regex Pattern & One Test Subject`
      );
      return false;
    } else {
      return true;
    }
  }

  public dateValidator(regexPattern: any, dateToValidate: any): boolean {
    if (this.checkArgs(regexPattern, dateToValidate)) {
      if (!regexPattern.test(dateToValidate)) {
        alert(`${dateToValidate} is an Invalid Format!`);
        return false;
      }
    }
    return true;
  }
  static numberValidator(numberToCheck: any): boolean {
    if (typeof numberToCheck !== 'number') {
      numberToCheck = parseInt(`${numberToCheck}`);
      if (numberToCheck < 0) {
        return false;
      }
    }
    return true;
  }
}
