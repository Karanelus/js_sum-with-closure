'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCounter = 0;

  return (num) => {
    callCounter++;

    return (operatar) => {
      if (callCounter > 3 && callCounter % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return num + operatar;
    };
  };
}

module.exports = makeRobotAccountant;
