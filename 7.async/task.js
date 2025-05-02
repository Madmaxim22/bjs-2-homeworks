// Задача 1. Будильник-колыбельная

class AlarmClock {

  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(timeActionStart, action) {
    if (
      typeof timeActionStart !== 'string' || 
      typeof action !== 'function'
    ) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    if(this.alarmCollection.some((element) => {
      return element.time === timeActionStart;
    })) {
      console.warn("Уже присутствует звонок на это же время");
    }

    this.alarmCollection.push({
      callback: action,
      time: timeActionStart,
      canCall: true,
    });
  }

  removeClock(timeActionStart) {
    this.alarmCollection = this.alarmCollection.filter((element) => {
      return element.time !== timeActionStart;
    });
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  start() {
    if (this.intervalId !== null) return;

    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach((clock) => {
        if (clock.time === this.getCurrentFormattedTime() && clock.canCall) {
          clock.canCall = false;
          clock.callback();
        }
      });
    });
  }

  stop() {
    clearInterval(this.intervalId, 50000);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((clock) => {
      clock.canCall = true;
    });
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

const callback = (f) => f;
let clock = new AlarmClock();
clock.addClock("16:45", callback);
// console.log(clock.alarmCollection.length === 1);
// console.log(clock.alarmCollection[0].canCall === true);
// console.log(clock.alarmCollection[0].time === "16:45");
// console.log(clock.alarmCollection[0].callback === callback);
// console.log(clock.intervalId === null);

// clock.start();
// console.log(clock.intervalId);
// clock.stop();

// console.log(clock.getCurrentFormattedTime() === new Date().toLocaleTimeString("ru-Ru", {
//   hour: "2-digit",
//   minute: "2-digit",
// }));

// clock.start();
// console.log(clock.intervalId);
// clock.stop();
// console.log(clock.intervalId === null);

// clock.start();
// console.log(clock.intervalId);
// clock.clearAlarms();
// console.log(clock.intervalId === null);
// console.log(clock.alarmCollection.length === 0);

// clock.start();
// const intervalId = clock.intervalId;
// clock.start();
// console.log(intervalId === clock.intervalId);

// clock.addClock("16:45", callback);
// clock.addClock("16:45", callback);
// clock.addClock("16:46", callback);
// clock.removeClock("16:45");
// console.log(clock.alarmCollection.length === 1);
// console.log(clock.alarmCollection);

// clock.addClock("16:45", f => f);
// clock.addClock("16:45", f => f);
// clock.addClock("16:45", f => f);
// console.log(clock.alarmCollection.length === 4);
// clock.clearAlarms();
// console.log(clock.alarmCollection.length === 0);

// clock.addClock(null, f => f);
// clock.addClock("16:45");

// clock.addClock("16:45", f => f);
// clock.addClock("16:45", f => f);
// clock.addClock("16:45", f => f);
// console.log(clock.alarmCollection.every(alarm => alarm.canCall) === true);
// clock.alarmCollection.forEach(alarm => alarm.canCall = false);
// console.log(clock.alarmCollection.every(alarm => alarm.canCall) === false);
// clock.resetAllCalls();
// console.log(clock.alarmCollection.every(alarm => alarm.canCall) === true);

// clock.getCurrentFormattedTime = () => "17:00";
// clock.start();
// setTimeout(() => {
//   console.log(clock.alarmCollection[0].canCall === true);
// }, 1000);

// let flagToCall = false;
// clock.addClock("16:45", () => flagToCall = true);
// clock.getCurrentFormattedTime = () => "16:45";
// clock.start();
// setTimeout(() => {
//   console.log(clock.alarmCollection[0].canCall === false);
//   console.log(flagToCall === true);
// }, 1000);
