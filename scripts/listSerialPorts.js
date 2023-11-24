const { SerialPort } = require('serialport')

async function ListPorts () {
  const ports = await SerialPort.list();
  console.log('Ports', ports);
}

async function GetPort(path) {
  const port = new SerialPort({ path, baudRate: 115200 });
  await new Promise((resolve, reject) => {
    port.open((err) => {
      if (err) return reject(err);
      resolve();
    })
  });
  return port;
}

async function TurnOn() {
  const port = await GetPort('/dev/ttyS0');
  port.write([0x06, 0x14, 0x00, 0x04, 0x00, 0x34, 0x11, 0x00, 0x00, 0x5D], undefined, (err) => {
    console.log('Turn On', err);
    port.drain((err) => {
      console.log('Drain Error', err);
    });
  });
}

TurnOn();

