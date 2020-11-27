export const saveStorage = (key = 'token', value) => {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    throw new Error(`fail save storage ${error}`);
  }
};

export const loadStorage = (key = 'token') => {
  try {
    const storage = window.localStorage.getItem(key);
    return storage === null ? undefined : storage;
  } catch (error) {
    return undefined;
  }
};

export const removeStorage = (key = 'token') => {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    throw new Error(`Fail removing storage: ${error}`);
  }
};
