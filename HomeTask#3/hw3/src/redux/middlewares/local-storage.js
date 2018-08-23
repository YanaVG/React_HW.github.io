const saveToLocalStorage = store => next => action => {
  next(action);
  localStorage.watchList = JSON.stringify(store.getState().movies.watchList);
};

export default saveToLocalStorage;
