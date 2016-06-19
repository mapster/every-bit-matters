IOT-Hub
=================

A Hub using websockets for IoT devices to communicate through, both sensor-devices and clients. It expects sensors to pass readings through the 'sensor:data' event using the following scheme (with potential custom changes if necessary):
```
  {
    id: 'some individual identifier for a device',
    type: 'the class of the device, e.g. sensortag',
    sensor: 'the type of the sensor, e.g irTemperature',
    data: someObjectWithSensorData
  }
```
The hub will redistribute the payload of 'sensor:data' events to all connected devices as 'client:display' events.
It is up to connected clients to interpret and use the passed data. We propose the above payload structure of sensor reading events to facilitate multiple clients receiving and interpreting data from sensor devices.

Getting started
---------------
See the wiki https://github.com/mapster/iothub/wiki
