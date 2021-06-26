/*
 * Exercise 3
 *
 * If you believe the class below can be refactored then please refactor it and explain why you felt it could/should
 * be refactored by leaving comments where changes were made.
 *
 * If you believe a refactor for the class below is unnecessary please state so and explain why you felt this way in a block comment.
 *
 * It is required that you use an online editor (jsbin, codepen, jsfiddle, stackblitz, etc) and send a link as your submission. This
 * should be a separate link apart from the other exercises. Submissions that do not use an online editor or are not separate
 * links will not be considered.
 *
 * IMPORTANT: all exercises are best effort. If you cannot arrive at the working solution requested, please just include an explanation
 * as to your approach, what worked, what didn't, and anything else you feel may be relevant.
 */

export class Machine {

  constructor(public type: number, public machineName: string) { }

  get name(): string {
    if (!this.machineName) { // null, emtpy string and undefined can be checked in this way
      switch (this.type) { // using switch instead of if else to reduce evaluating conditions
        case 2:
          return 'tractor';

        case 0:
          return 'bulldozer';

        case 1:
          return 'crane';

        case 4:
          return 'car';

        case 3:
          return 'truck';

        default:
          return '';
      }
    }
    return '';
  }

  get description(): string {
    let hasMaxSpeed = (this.type == 3 || this.type == 4) ? false : true; // there are only two conditions where hasMaxSpeed is false and in all the reamining cases it is true, So it is better using ternary operator
    return ` ${this.color} ${this.name} [${this.getMaxSpeed(this.type, hasMaxSpeed)}].`; // used template literals instead of using concat many times
  }

  get color(): string {
    switch (this.type) { // used switch to make it better in readability
      case 1:
        return 'blue';
      case 0:
        return 'red';
      case 4:
        return 'brown';
      case 3:
        return 'yellow';
      case 2:
        return 'green';
      default:
        return 'white'
    }
  }
  getBaseColor(): string { // moved to seperate method 
    switch (this.type) {
      case 0:
        return 'red';
      case 1:
        return 'blue';
      case 2:
        return 'green';
      case 3:
        return 'yellow';
      case 4:
        return 'brown';
      default:
        return 'white';
    }

  }

  get trimColor(): string {
    switch (this.type) { // used switch to make it better in readability
      case 1:
        return (this.isDark(this.getBaseColor())) ? 'black' : 'white';
      case 2:
        return 'gold';
      case 3:
        return 'silver';
      default:
        return '';
    }
  }

  isDark(color: string) {
    //  by default the value is false, so we can check only the color which are true using ternary operator
    return ['red', 'green', 'black', 'crimson'].includes(color) ? true : false;
  }

  getMaxSpeed(machineType: any, noMax = false) {
    // let absoluteMax = 70;
    // removed unused variable
    let max = 70;
    if (noMax) {
      if (machineType == 0) max = 80;
      else if (machineType == 2) max = 90;
      else if (machineType == 4) max = 90;
      else if (machineType == 1) max = 75;
    } else {
      if (machineType == 2) max = 60;
    }

    return max;
  }

}
