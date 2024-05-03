import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([userResult, photoError]) => [
      {
        status: 'done',
        value: userResult,
      },
      {
        status: 'rejected',
        value: photoError.message,
      },
    ])
    .catch((error) => [
      {
        status: 'rejected',
        value: error.message,
      },
    ]);
}
