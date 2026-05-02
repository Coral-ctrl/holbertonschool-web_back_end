import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';
 
export default function handleProfileSignup(firstName, lastName, fileName) {
  // Promise.allSettled([...]) — waits for every promise to settle (fulfilled or rejected)
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => results.map(({ status, value, reason }) => ({
      status,
      value: status === 'fulfilled' ? value : String(reason),
    })));
}
