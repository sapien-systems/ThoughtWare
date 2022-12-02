class CustomEventEmitter {
  constructor() {
    this.events = {};
  }

  addEventListener(event, listener) {
    if (typeof this.events[event] !== 'object') {
      this.events[event] = [];
    }
    this.events[event][0] = listener;
    return listener;
  }

  removeListener(event, listener) {
    if (typeof this.events[event] === 'object') {
      const idx = this.events[event].indexOf(listener);
      if (idx > -1) {
        this.events[event].splice(idx, 1);
      }
      if (this.events[event].length === 0) {
        delete this.events[event];
      }
    }
  }

  emit(event, ...args) {
    if (typeof this.events[event] === 'object') {
      this.events[event].forEach(listener => {
        try {
          listener.apply(this, args);
        } catch (e) {
          console.log(e);
        }
      });
    }
  }
}

const customEvents = new CustomEventEmitter();
export default customEvents;
