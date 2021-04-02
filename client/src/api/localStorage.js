export const saveState = (state) => {
  const {store, userId, data} = state
  const key = `${store}UserId:${userId}`
  try {
    const initialState = localStorage[key] ?
      JSON.parse(localStorage[key]) : [];
    const newState = JSON.stringify([...initialState, data]);
    localStorage.setItem(key, newState);
    return data;
  } catch (err){
    return err;
  }
};

export const loadState = (state) => {
  const {store, userId} = state
  const key = `${store}UserId:${userId}`
  try {
    const serializedState = localStorage.getItem(key);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return err;
  }
}; 