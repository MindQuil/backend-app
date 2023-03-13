const sha1 = require('sha1');
const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  const hashedPassword = sha1(password);

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(hashedPassword, salt);

  return passwordHash;
};

const comparePassword = async function comparePassword(password, hash) {
  const hashedPassword = sha1(password);
  const isMatch = await bcrypt.compare(hashedPassword, hash);
  return isMatch;
};

module.exports = {
  hashPassword,
  comparePassword,
};
