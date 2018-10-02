import { auth, database } from '../../firebase';

const databaseUpdate = store => next => action => {
  if (!action.payload) return;
  next(action);
  if (!auth.currentUser()) return;

  const userId = auth.currentUser().uid;
  const list = store.getState().movies.watchlist;
  const username = {
    watchlist: list,
  };
  database.updateUser(username, userId);
};

export default databaseUpdate;

// const saveToLocalStorage = store => next => action => {
//   next(action);
//   localStorage.watchList = JSON.stringify(store.getState().movies.watchList);
// };
