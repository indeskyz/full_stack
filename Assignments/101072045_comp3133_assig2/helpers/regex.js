// Email format of user@name.com
const checkEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

// Canadian Postal Code match
// https://gist.github.com/jamesbar2/1c677c22df8f21e869cca7e439fc3f5b
const checkPostalCode = /^[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy]{1}\d{1}[A-Za-z]{1} *\d{1}[A-Za-z]{1}\d{1}$/;

// matches MM/DD/YYYY & MM-DD-YYYY
// checks for 28,30,&31 days for months
const checkDate = /^(?:(?:(?:0?[13578]|1[02])(\/|-|\.)31)\1|(?:(?:0?[1,3-9]|1[0-2])(\/|-|\.)(?:29|30)\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:0?2(\/|-|\.)29\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:(?:0?[1-9])|(?:1[0-2]))(\/|-|\.)(?:0?[1-9]|1\d|2[0-8])\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;

module.exports = {
  checkEmail,
  checkPostalCode,
  checkDate,
};
