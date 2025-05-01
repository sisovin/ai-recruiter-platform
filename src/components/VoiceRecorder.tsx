import React, { useState, useRef, useEffect } from 'react';

const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioBlob, setAudioBlob] = useState(null);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRecording) {
      intervalRef.current = setInterval(() => {
        setRecordingDuration((prevDuration) => prevDuration + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [isRecording]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    setMediaRecorder(recorder);

    recorder.ondataavailable = (event) => {
      const blob = new Blob([event.data], { type: 'audio/wav' });
      setAudioBlob(blob);
      setAudioURL(URL.createObjectURL(blob));
    };

    recorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setIsRecording(false);
  };

  const playRecording = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div>
      <h2>Voice Recorder</h2>
      <button onClick={startRecording} disabled={isRecording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!isRecording}>
        Stop Recording
      </button>
      <button onClick={playRecording} disabled={!audioURL}>
        Play Recording
      </button>
      <p>Status: {isRecording ? 'Recording...' : 'Stopped'}</p>
      <p>Duration: {recordingDuration} seconds</p>
      {audioURL && <audio ref={audioRef} src={audioURL} controls />}
    </div>
  );
};

export default VoiceRecorder;
