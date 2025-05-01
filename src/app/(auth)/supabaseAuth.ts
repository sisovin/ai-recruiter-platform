import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const signInWithEmail = async (email: string, password: string) => {
  const { user, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) throw error;
  return user;
};

export const signUpWithEmail = async (email: string, password: string) => {
  const { user, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;
  return user;
};

export const signInWithGoogle = async () => {
  const { user, error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
  if (error) throw error;
  return user;
};

export const signInWithFacebook = async () => {
  const { user, error } = await supabase.auth.signInWithOAuth({ provider: 'facebook' });
  if (error) throw error;
  return user;
};
