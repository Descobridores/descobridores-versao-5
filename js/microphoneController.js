class Microphone {
  constructor(timerEl) {
    this.streamAvailable = false;
    this.stream;
    this.recorder;
    this.timerEl = timerEl;
    this.audioFile;
    this.audio;
  }

  async start() {
    try {
      this.stream = await this.getUserPermission();
      console.log(this.stream);
      this.startRecorder();
    } catch (err) {
      console.log("error", err);
      // handle error - close mic
    }
  }

  // isAvailable() {
  //   return this.streamAvailable;
  // }

  getUserPermission() {
    // get user permission
    // navigator.mediaDevices
    //   .getUserMedia({ audio: true })
    //   .then((stream) => {
    //     this.streamAvailable = true;
    //     this.stream = stream;
    //   })
    //   .catch((err) => {
    //     // TODO
    //     // closeMicrophone()
    //     console.log(err, "ERROR::Could not get user permission");
    //   });

    return navigator.mediaDevices.getUserMedia({ audio: true });
  }

  startRecorder() {
    // if (this.isAvailable()) {
    this.recorder = new MediaRecorder(this.stream, {
      mimeType: "audio/webm",
    });
    this.chuncks = [];

    // console.log(this.recorder);
    this.recorder.addEventListener("dataavailable", (event) => {
      if (event.data.size > 0) this.chuncks.push(event.data);
    });

    this.recorder.addEventListener("stop", () => {
      // para criar um arquivo precisamos dar à classe File() um objeto blob (binary long object)
      let blob = new Blob(this.chuncks, { type: "audio/webm" });
      let fileName = `rec${Date.now()}.webm`;

      let file = new File([blob], fileName, {
        type: "audio/webm",
        lastModified: Date.now(),
      });

      console.log(file);
      this.audioFile = file;

      let reader = new FileReader();

      reader.onload = (e) => {
        this.audio = new Audio(reader.result);
      };

      reader.readAsDataURL(this.audioFile);
    });

    this.recorder.start();
    this.startTimer();
    // }
  }

  stopRecorder() {
    this.recorder.stop();
    this.stream.getAudioTracks().forEach((track) => track.stop());
  }

  stop() {
    this.stopRecorder();
    this.stopTimer();
  }

  playAudio() {
    this.audio.play();
  }

  stopAudio() {
    this.audio.pause();
  }

  // TIMER ELEMENT
  startTimer() {
    let start = Date.now();
    console.log(this.timerEl);
    // the timer value will be updated every 100 milliseconds
    this.timer = setInterval(() => {
      this.timerEl.innerHTML = this.toTime(Date.now() - start);
    }, 100);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  toTime(duration) {
    let seconds = parseInt((duration / 1000) % 60); // resto - queremos os segundos que nao sao minutos
    let minutes = parseInt((duration / (1000 * 60)) % 60);
    let hours = parseInt((duration / (1000 * 60 * 60)) % 24);

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    } else {
      return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    }
  }
}
// DOM ELEMENTS

// INIT ELEMENTS
const recorderEl = document.querySelector("#recorder");
const playerEl = document.querySelector("#player");
const startEl = document.querySelector("#start__rec");
const stopEl = document.querySelector("#stop__rec");
// const stopEl = document.querySelector("#stop");

const sendEl = document.querySelector("#send");
const deleteEl = document.querySelector("#delete");
const micContainer = document.querySelector(".mic__container");
const micDisplayEl = document.querySelector(".mic__display");
const audioPlayerEl = document.querySelector(".audio__player");
const timerRecEl = document.getElementById("timer__rec");
const timerPlayEl = document.getElementById("timer__play");
const playAudioEl = document.querySelector("#play__audio");
const pauseAudioEl = document.querySelector("#stop__audio");
const playerCircleEl = document.querySelector(".player__circle");

let microphone;
let timerInterval;
let couter;

// INIT BUTTONS EVENTS

startEl.addEventListener("click", () => {
  microphone = new Microphone(timerRecEl);
  microphone.start();

  // elements styles
  startEl.parentElement.style.display = "none";
  micContainer.style.display = "block";
});

stopEl.addEventListener("click", () => {
  microphone.stop();

  // elements styles
  stopEl.style.display = "none";
  micDisplayEl.style.display = "none";
  audioPlayerEl.style.display = "flex";
  timerPlayEl.innerHTML = timerRecEl.innerHTML;
});

playAudioEl.addEventListener("click", () => {
  microphone.playAudio();

  playAudioEl.style.display = "none";
  pauseAudioEl.style.display = "block";

  // makes the timer circle move along while the audio plays
  const audioLenth = 10;
  const step = 100.0 / audioLenth;
  couter = 1;

  timerInterval = setInterval(() => {
    playerCircleEl.style.left = `${step * couter}%`;
    couter += 1;

    if (couter > audioLenth) {
      playAudioEl.style.display = "block";
      pauseAudioEl.style.display = "none";
      playerCircleEl.style.left = "0%";
      clearInterval(timerInterval);
    }
  }, 1000);
});

pauseAudioEl.addEventListener("click", () => {
  microphone.stopAudio();
  playAudioEl.style.display = "block";
  pauseAudioEl.style.display = "none";
});

// FUNCTIONS
const toTime = (duration) => {
  let seconds = parseInt((duration / 1000) % 60); // resto - queremos os segundos que nao sao minutos
  let minutes = parseInt((duration / (1000 * 60)) % 60);
  let hours = parseInt((duration / (1000 * 60 * 60)) % 24);

  if (hours > 0) {
    return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  } else {
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }
};

// MIC SMALL
const micSmall = document.getElementById("start__rec__s");
micSmall.addEventListener("click", () => {
  document.querySelectorAll(".microphone__small").forEach((el) => {
    el.style.display = "block";
  });
  micSmall.style.display = "none";
});
