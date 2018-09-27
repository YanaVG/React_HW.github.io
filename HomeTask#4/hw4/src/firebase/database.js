import { database } from './farebase';

//user api
export const createUser = (id, username, email) => 
  database.ref(`users/${id}`).set({
   username,
   email,   
  });

export const onceGetUsers = () => database.ref('users').once('value');

export const updateUser = (data, id) => database.ref(`users/${id}`).updata(data);

export const getUserDAta = id => database.ref(`users/${id}`).once('value');