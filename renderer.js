async function connectDevice () {
  const devicename = document.getElementById('devicename').value
  const device = await navigator.bluetooth.requestDevice({
    filters: [{ name: devicename }]
  })
  document.getElementById('device-name').innerHTML = device.name || `ID: ${device.id}`
}
async function connectRandom () {
  const device = await navigator.bluetooth.requestDevice({
    acceptAllDevices: true
  })
  document.getElementById('device-name').innerHTML = device.name || `ID: ${device.id}`
}

document.getElementById('clickme').addEventListener('click', connectDevice)
document.getElementById('clickme-random').addEventListener('click', connectRandom)
