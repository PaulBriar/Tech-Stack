import data from './LibraryList.json';

export default () => data;


// export default async () => {
//   try {
//     const res = await fetch('http://127.0.0.1:3001/techstack')
//     const resJson = await res.json();
//     console.log(resJson);
//   } catch (err) {
//     console.log(err);
//   }
// };
