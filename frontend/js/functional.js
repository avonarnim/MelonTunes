"use strict";

window.onload = function () {
  // Get audio from user

  var gumStream; //stream from getUserMedia()
  var rec; //Recorder.js object
  var input; //MediaStreamAudioSourceNode we'll be recording
  var storedAudio;

  // shim for AudioContext when it's not avb.
  var AudioContext = window.AudioContext || window.webkitAudioContext;
  var audioContext; //audio context to help us record

  var recordButton = document.getElementById("recordButton");
  var stopButton = document.getElementById("stopButton");
  var pauseButton = document.getElementById("pauseButton");

  //add events to those 2 buttons
  recordButton.addEventListener("click", startRecording);
  stopButton.addEventListener("click", stopRecording);
  pauseButton.addEventListener("click", pauseRecording);

  function startRecording() {
    console.log("recordButton clicked");

    var constraints = { audio: true, video: false };

    recordButton.disabled = true;
    stopButton.disabled = false;
    pauseButton.disabled = false;

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(function (stream) {
        console.log(
          "getUserMedia() success, stream created, initializing Recorder.js ..."
        );

        /*
			create an audio context after getUserMedia is called
			sampleRate might change after getUserMedia is called, like it does on macOS when recording through AirPods
			the sampleRate defaults to the one set in your OS for your playback device
		*/
        audioContext = new AudioContext();
        console.log(
          "Format: 1 channel pcm @ " + audioContext.sampleRate / 1000 + "kHz"
        );

        /*  assign to gumStream for later use  */
        gumStream = stream;

        /* use the stream */
        input = audioContext.createMediaStreamSource(stream);

        /* 
			Create the Recorder object and configure to record mono sound (1 channel)
			Recording 2 channels  will double the file size
		*/
        rec = new Recorder(input, { numChannels: 1 });

        //start the recording process
        rec.record();

        console.log("Recording started");
      })
      .catch(function (err) {
        //enable the record button if getUserMedia() fails
        recordButton.disabled = false;
        stopButton.disabled = true;
        pauseButton.disabled = true;
      });
  }

  function pauseRecording() {
    console.log("pauseButton clicked rec.recording=", rec.recording);
    if (rec.recording) {
      //pause
      rec.stop();
      pauseButton.innerHTML = "Resume";
    } else {
      //resume
      rec.record();
      pauseButton.innerHTML = "Pause";
    }
  }

  function stopRecording() {
    console.log("stopButton clicked");

    //disable the stop button, enable the record too allow for new recordings
    stopButton.disabled = true;
    recordButton.disabled = false;
    pauseButton.disabled = true;

    //reset button just in case the recording is stopped while paused
    pauseButton.innerHTML = "Pause";

    //tell the recorder to stop the recording
    rec.stop();

    //stop microphone access
    gumStream.getAudioTracks()[0].stop();

    //create the wav blob and pass it on to createDownloadLink
    rec.exportWAV(storeWav);
  }

  function storeWav(blob) {
    storedAudio = blob;
  }

  // Get prediction & send features data to database
  document.getElementById("predictionInput").onclick = () => {
    console.log("submitting feature data");

    // Getting spot conditional
    var checkRadio = document.querySelector('input[name="spotAvail"]:checked');

    if (storedAudio == undefined || checkRadio == null) {
      // failing case
    } else {
      // submit data
      console.log(storedAudio);
      console.log(checkRadio.value);
    }
  };

  // Send labels data to database
  document.getElementById("dataInput").onclick = () => {
    console.log("submitting label data");

    if (crispness == "" || sweetness == "") {
      // failing case
    } else {
      // submit data
      console.log(crispness.value);
      console.log(sweetness.value);
    }
  };
};