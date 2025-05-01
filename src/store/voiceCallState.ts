import create from 'zustand';

interface VoiceCallState {
  isMuted: boolean;
  isOnHold: boolean;
  callDuration: number;
  callStatus: string;
  startCall: () => void;
  endCall: () => void;
  muteCall: () => void;
  unmuteCall: () => void;
  holdCall: () => void;
  resumeCall: () => void;
}

export const useVoiceCallState = create<VoiceCallState>((set) => ({
  isMuted: false,
  isOnHold: false,
  callDuration: 0,
  callStatus: 'Disconnected',
  startCall: () => set({ callStatus: 'Connected', callDuration: 0 }),
  endCall: () => set({ callStatus: 'Disconnected', callDuration: 0 }),
  muteCall: () => set({ isMuted: true }),
  unmuteCall: () => set({ isMuted: false }),
  holdCall: () => set({ isOnHold: true, callStatus: 'On Hold' }),
  resumeCall: () => set({ isOnHold: false, callStatus: 'Connected' }),
}));
