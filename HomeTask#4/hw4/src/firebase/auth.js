import { auth } from './firebase';

// sign out
export const signOut = auth.signOut();

// change password
export const changePasswort = password =>
  auth.currentUser.updatePassword(password);

export const currentUser = () => auth.currentUser();

// Check autorization with Google, Facebook, Twitter, GitHub
export const isAuth = () =>
  !!(currentUser().displayName && currentUser().photoURL());
