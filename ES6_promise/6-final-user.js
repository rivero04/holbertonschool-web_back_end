import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then(([userResult, photoError]) => {
      return [
        {
          status: "done",
          value: userResult,
        },
        {
          status: "rejected",
          value: photoError.message,
        },
      ];
    })
    .catch((error) => {
      return [
        {
          status: "rejected",
          value: error.message,
        },
      ];
    });
}
