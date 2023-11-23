const { SerialPort } = require('serialport')

async function ListPorts () {
  const ports = await SerialPort.list();
  console.log('Ports', ports);
}

ListPorts();

