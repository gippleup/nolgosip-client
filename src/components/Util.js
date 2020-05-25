// import axios from 'axios';

export const getUserVacation = () => {
  const url = 'http://15.164.226.124:5000/vacation';
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      type: 'get',
      target: 'user',
      email: 'managerSong@gmail.com',
      from: '2020-01-01',
      to: '2020-12-31',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  }).then((res) => console.log(res.text()));
};


export const signin = () => fetch('http://15.164.226.124:5000/signin', {
  method: 'POST',
  body: JSON.stringify({
    email: 'a',
    password: 'a',
  }),
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
}).then((res) => console.log(res.json()));

export default { getUserVacation, signin };
