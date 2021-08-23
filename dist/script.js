// const name = ['faais', 'yasir', 'raseen', 'praveen', 'kkk'];
// name.copyWithin(1, 1);

// console.log(name);

// const form = document.querySelector('#formSubmit');
// const name = document.querySelector('#nameInput');
// const age = document.querySelector('#ageInput');
// const gender = document.querySelector('#genderInput');
// const ui = document.querySelector('#list-items');

// form.addEventListener('submit', () => {
//   const ageValue = age.value;
//   const nameValue = name.value;
//   const genderValue = gender.value;
//   const stringss = ageValue + ',' + nameValue + ',' + genderValue;
//   const data = stringss.split(',');
//   // console.log();
//   localStorage.setItem('textVa', data);
//   return false;
// });

const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(
  webcamElement,
  'user',
  canvasElement,
  snapSoundElement
);

webcam
  .start()
  .then((result) => {
    console.log('webcam started');
  })
  .catch((err) => {
    console.log(err);
  });

let picture = webcam.snap();
document.querySelector('#download-photo').href = picture;
$('#cameraFlip').click(function () {
  webcam.flip();
  webcam.start();
});

navigator.mediaDevices
  .enumerateDevices()
  .then(getVideoInputs)
  .catch(errorCallback);

function getVideoInputs(mediaDevices) {
  mediaDevices.forEach((mediaDevice) => {
    if (mediaDevice.kind === 'videoinput') {
      this._webcamList.push(mediaDevice);
    }
  });
}

navigator.mediaDevices
  .getUserMedia(this.getMediaConstraints())
  .then((stream) => {
    this._webcamElement.srcObject = stream;
    this._webcamElement.play();
  })
  .catch((error) => {
    //...
  });

if (this._facingMode == 'user') {
  this._webcamElement.style.transform = 'scale(-1,1)';
}
