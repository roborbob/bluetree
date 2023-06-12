/** @format */

export async function getDevice(constraints) {
  let device = window.navigator.userAgent;

  if (
    device.match(/Android/i) ||
    device.match(/webOS/i) ||
    device.match(/iPhone/i) ||
    device.match(/iPad/i) ||
    device.match(/iPod/i) ||
    device.match(/BlackBerry/i) ||
    device.match(/Windows Phone/i)
  ) {
    return true;
  } else {
    return false;
  }
}

export async function getMedia(constraints) {
  try {
    stream = await window.navigator.mediaDevices.getUserMedia(constraints);
    console.log(stream);
  } catch (err) {
    /* handle the error */
  }
}
