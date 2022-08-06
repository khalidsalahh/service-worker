# service-worker

## start

```js
import Service from "service";

(function(){
  const service = {
    sw: null,
    init: new Service();
  }
  
  /* Register take 4 parameter:
    1: parameter is requied => and it is the file;
    2: parameter is optional => and it is the service-worker scope;
    3: parameter is optional => and it is the service-worker type;
    4: parameter is optional => and it is the update of the service-worker via cache
  */ 
  const serviceState = service.init.Register("/sw.js"); // Register return a promise of the service state
  
})()
```

Use message event
```js
  function receiveMessage(e){
     const {data} = e;
     console.log(data); // the recived data;
     ...
  }

  service.init.message(receiveMessage) // take a one parameter => callback function;    
```

Use postMessage to send message
```js
  const person = {
    id: 123,
    name: "John"
  }
  service.init.postMessage(person) // take a one parameter;    
```

Use controllerChange event
```js
  function sWorkerState(e){
    console.log(g)
    ...
  }
  
  service.init.controllerChange(sWorkerState) // take a one parameter => callback function;    
```

Use removeEvent to remove events
```js
  service.init.removeEvent("message", receiveMessage) // take a two parameter => 1: the event; 2: callback function;    
```
