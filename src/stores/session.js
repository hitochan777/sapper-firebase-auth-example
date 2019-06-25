import { writable } from "svelte/store";

export const currentUser = writable(null);
export const tmpUser = writable(null);
export const loading = writable(true);

export const setUser = newUser => {
  console.log("setUser called");
  currentUser.set(newUser);
};

export const setLoading = newLoading => {
  console.log("setLoading called");
  loading.set(newLoading);
};

export const setTmpUser = newTmpUser => {
  console.log("setTmpUser called");
  tmpUser.set(newTmpUser);
};
