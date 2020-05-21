export const SET_LOGGED = 'SET_LOGGED';
export const SET_USERDATA = 'SET_USERDATA';

export const setLogged = (logged) => ({
  type: SET_LOGGED,
  logged,
});

export const setUserData = (userData) => ({
  type: SET_USERDATA,
  userData,
});
// export const setDarkMode = value => ({
//   type: SET_DARK_MODE,
//   value
// });

// export const setCurrentVideo = video => ({
//   type: SET_CURRENT_VIDEO,
//   video
// });
