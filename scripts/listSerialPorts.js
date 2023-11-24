const { SerialPort } = require('serialport')
const serialIo = require('serial-io');

const PowerOn = [0x06, 0x14, 0x00, 0x04, 0x00, 0x34, 0x11, 0x00, 0x00, 0x5D];
const PowerOff = [0x06, 0x14, 0x00, 0x04, 0x00, 0x34, 0x11, 0x01, 0x00, 0x5E];
const PowerStatus = [0x07, 0x14, 0x00, 0x05, 0x00, 0x34, 0x00, 0x00, 0x11, 0x00, 0x5E];

async function ListPorts () {
  const ports = await SerialPort.list();
  console.log('Ports', ports);
}

async function GetPort(path) {
  const port = new SerialPort({ path, baudRate: 115200, autoOpen: false });
  await new Promise((resolve, reject) => {
    port.open((err) => {
      if (err) return reject(err);
      resolve();
    })
  });
  return port;
}

async function Write(data, port) {
  return await new Promise((resolve, reject) => {
    port.write(data, undefined, (err) => {
      if (err) return reject(err);
      port.drain((err) => {
        if (err) return reject(err);
        resolve();
      });
    });
  });
}

async function TurnOn() {
  const port = await GetPort('/dev/ttyS0');
  await Write(PowerOn, port);

}

async function TurnOff() {
  const res = await serialIo.send('/dev/ttyS0', Buffer.from("0614000400341101005E", "hex"))
  // const port = await GetPort('/dev/ttyS0');
  // await Write(Buffer.from("0614000400341101005E", "hex"), port);
  console.log(res);
}

async function IsOn() {
  const port = await GetPort('/dev/ttyS0');
  await Write(PowerStatus, port);
  // const data = port.read(2);
  // console.log('Read', data);
}

if (process.argv[2] === 'on') {
  TurnOn();
} else if (process.argv[2] === 'off') {
  TurnOff();
} else if (process.argv[2] === 'isOn') {
  IsOn();
}

