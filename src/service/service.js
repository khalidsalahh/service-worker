export class Service {
  /*
  This Func take tow parameter:
    1: the filePath of the file;
    2: the options of the service;
  */
  async Register(filepath, scope, type, updateViaCache) {
    let sw = null;

    if ("serviceWorker" in navigator) {
      var service = await navigator.serviceWorker.register(filepath, {
        scope,
        type,
        updateViaCache,
      });
      sw = service.installing || service.waiting || service.active;

      return sw;
    } else {
      console.warn("This broswer not support service workers");
    }
  }

  /*
  This Func take single parameter:
    1: A message to recice it from the service worker;
  */
  message(func) {
    navigator.serviceWorker.addEventListener("message", func);
  }

  /*
  This Func take single parameter:
    1: A message to send it to the service worker;
  */
  postMessage(msg) {
    navigator.serviceWorker.controller.postMessage(msg);
  }

  /*
  This Func take single parameter:
    1: A function to run it when the event if fired
  */
  controllerChange(func) {
    // if (typeof func === "object") {
    navigator.serviceWorker.addEventListener("controllerchange", func);
    // }
  }

  /*
  This Func take single parameter:
    1: A function to run it when the event if fired
  */
  removeEvent(event, fun) {
    navigator.serviceWorker.removeEventListener(event, fun);
  }

  /*
  This Func take single parameter:
    1: A function to run it when the event if fired
  */
  async removeSWorkers() {
    const Registration = navigator.serviceWorker.getRegistrations();
    Registration.map((reg) => reg.unregister());
  }

  /*
  This Func take single parameter:
    1: A function to run it when there is sw registered
  */
  ready(func) {
    navigator.serviceWorker.ready.then(fun);
  }
}
