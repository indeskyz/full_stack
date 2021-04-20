// Email format of user@name.com
const checkEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

// Canadian Postal Code match
// https://gist.github.com/jamesbar2/1c677c22df8f21e869cca7e439fc3f5b
const checkPostalCode = /^(?=[^DdFfIiOoQqUu\\d\\s])[A-Za-z]\\d(?=[^DdFfIiOoQqUu\\d\\s])[A-Za-z]\\s{0,1}\\d(?=[^DdFfIiOoQqUu\\d\\s])[A-Za-z]\\d$/;

// matches YYYY/MM/DD & YYYY-MM-DD
// checks for 28,30,&31 days for months
const checkDate = /(((19|20)([2468][048]|[13579][26]|0[48])|2000)[/-]02[/-]29|((19|20)[0-9]{2}[/-](0[4678]|1[02])[/-](0[1-9]|[12][0-9]|30)|(19|20)[0-9]{2}[/-](0[1359]|11)[/-](0[1-9]|[12][0-9]|3[01])|(19|20)[0-9]{2}[/-]02[/-](0[1-9]|1[0-9]|2[0-8])))/;

module.exports = checkEmail;
module.exports = checkPostalCode;
module.exports = checkDate;
