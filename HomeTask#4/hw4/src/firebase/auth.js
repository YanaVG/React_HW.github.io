import { auth } from './firebase';

// sign out
export const signOut = () => auth.signOut();

// change password
export const currentUser = () => auth.currentUser;

export const changePasswort = password =>
  auth.currentUser.updatePassword(password);

// Check autorization with Google, Facebook, GitHub
export const isAuth = () =>
  !!(currentUser().displayName && currentUser().photoURL);
