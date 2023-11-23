const { autoDetect } = require('@serialport/bindings-cpp')

async function ListPorts () {
  const Binding = autoDetect()

  const ports = await Binding.list();
  console.log('Ports', ports);
}

ListPorts();

