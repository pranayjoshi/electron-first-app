async function testIt () {
  const device = await navigator.bluetooth.requestDevice({
    filters: [{ name: 'Pranay’s iPhone' }]
  })
  document.getElementById('device-name').innerHTML = device.name || `ID: ${device.id}`
}

document.getElementById('clickme').addEventListener('click', testIt)
