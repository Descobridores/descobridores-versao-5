// class Microphone {
//   constructor() {
//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//       console.log("getUserMedia supported");
//     } else {
//       console.log("getUserMedia is not supported on your browser!");
//     }

//     this.mediaRecorder;
//     this.stream;
//     this.chunks = [];
//     this.isRecording = false;

//     this.recorderRef = document.querySelector("#recorder");
//     this.playerRef = document.querySelector("#player");
//     this.startRef = document.querySelector("#start");
//     this.stopRef = document.querySelector("#stop");
//     // new elements
//     this.sendRef = document.querySelector("#send");
//     this.deleteRef = document.querySelector("#delete");
//     this.micContainer = document.querySelector(".mic__container");
//     this.audioPlayer = document.querySelector(".audio__player");
//     this.timerEl = document.querySelector(".audio__timer");

//     this.timer;

//     this.startRef.onclick = this.startRecording.bind(this);
//     this.stopRef.onclick = this.stopRecording.bind(this);
//     // new elementa
//     this.sendRef.onclick = this.send.bind(this);
//     this.deleteRef.onclick = this.delete.bind(this);

//     this.constraints = {
//       audio: true,
//       video: false,
//     };
//   }

//   handleSuccess(stream) {
//     this.stream = stream;
//     this.stream.oninactive = () => {
//       console.log("Stream ended!");
//     };
//     this.recorderRef.srcObject = this.stream;
//     this.mediaRecorder = new MediaRecorder(this.stream);
//     console.log(this.mediaRecorder);
//     this.mediaRecorder.ondataavailable =
//       this.onMediaRecorderDataAvailable.bind(this);
//     this.mediaRecorder.onstop = this.onMediaRecorderStop.bind(this);
//     this.recorderRef.play();
//     this.mediaRecorder.start();
//     this.startTimer();
//   }

//   handleError(error) {
//     console.log("navigator.getUserMedia error: ", error);
//   }

//   onMediaRecorderDataAvailable(e) {
//     this.chunks.push(e.data);
//   }

//   onMediaRecorderStop(e) {
//     const blob = new Blob(this.chunks, { type: "audio/ogg; codecs=opus" });
//     const audioURL = window.URL.createObjectURL(blob);
//     this.playerRef.src = audioURL;
//     this.chunks = [];
//     this.stream.getAudioTracks().forEach((track) => track.stop());
//     this.stream = null;
//   }

//   startRecording() {
//     if (this.isRecording) return;
//     this.isRecording = true;

//     // html elements styles
//     this.startRef.parentElement.style.display = "none";
//     this.micContainer.style.display = "block";

//     this.playerRef.src = "";
//     navigator.mediaDevices
//       .getUserMedia(this.constraints)
//       .then(this.handleSuccess.bind(this))
//       .catch(this.handleError.bind(this));
//   }

//   stopRecording() {
//     if (!this.isRecording) return;
//     this.isRecording = false;

//     // html elements styles
//     this.audioPlayer.style.display = "block";
//     // this.micContainer.style.display = "none";

//     this.recorderRef.pause();
//     this.mediaRecorder.stop();
//     this.stopTimer();
//   }

//   startTimer() {
//     let start = Date.now();

//     // the timer value will be updated every 100 milliseconds
//     this.timer = setInterval(() => {
//       this.timerEl.innerHTML = this.toTime(Date.now() - start);
//     }, 100);
//   }

//   stopTimer() {
//     clearInterval(this.timer);
//   }

//   // TODO
//   send() {
//     this.micContainer.style.display = "none";
//     this.audioPlayer.style.display = "none";
//     this.startRef.parentElement.style.display = "block";
//     location.reload();
//   }

//   // TODO
//   delete() {
//     this.startRef.parentElement.style.display = "block";
//     this.micContainer.style.display = "none";
//     this.audioPlayer.style.display = "none";
//     location.reload();
//   }

//   toTime(duration) {
//     let seconds = parseInt((duration / 1000) % 60); // resto - queremos os segundos que nao sao minutos
//     let minutes = parseInt((duration / (1000 * 60)) % 60);
//     let hours = parseInt((duration / (1000 * 60 * 60)) % 24);

//     if (hours > 0) {
//       return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
//         .toString()
//         .padStart(2, "0")}`;
//     } else {
//       return `${minutes.toString().padStart(2, "0")}:${seconds
//         .toString()
//         .padStart(2, "0")}`;
//     }
//   }
// }

// window.voiceRecorder = new Microphone();
