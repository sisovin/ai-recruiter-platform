import React, { useState, useEffect } from 'react';
import VoiceRecorder from './VoiceRecorder';
import AIResponder from './AIResponder';

const CallControls = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isOnHold, setIsOnHold] = useState(false);
  const [callDuration, setCallDuration] = useState(0);
  const [callStatus, setCallStatus] = useState('Connected');
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCallDuration((prevDuration) => prevDuration + 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleHold = () => {
    setIsOnHold(!isOnHold);
    setCallStatus(isOnHold ? 'Connected' : 'On Hold');
  };

  const handleEndCall = () => {
    clearInterval(intervalRef.current);
    setCallStatus('Ended');
  };

  return (
    <div>
      <h2>Call Controls</h2>
      <button onClick={handleMute}>
        {isMuted ? 'Unmute' : 'Mute'}
      </button>
      <button onClick={handleHold}>
        {isOnHold ? 'Resume' : 'Hold'}
      </button>
      <button onClick={handleEndCall}>
        End Call
      </button>
      <p>Status: {callStatus}</p>
      <p>Duration: {callDuration} seconds</p>
      <VoiceRecorder />
      <AIResponder />
    </div>
  );
};

export default CallControls;
