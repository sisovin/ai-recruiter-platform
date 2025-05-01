import create from 'zustand';

interface InterviewSessionState {
  sessions: any[];
  addSession: (session: any) => void;
  removeSession: (id: string) => void;
  updateSession: (id: string, updatedSession: any) => void;
}

export const useInterviewSessionStore = create<InterviewSessionState>((set) => ({
  sessions: [],
  addSession: (session) => set((state) => ({ sessions: [...state.sessions, session] })),
  removeSession: (id) => set((state) => ({ sessions: state.sessions.filter((session) => session.id !== id) })),
  updateSession: (id, updatedSession) => set((state) => ({
    sessions: state.sessions.map((session) => (session.id === id ? updatedSession : session)),
  })),
}));
