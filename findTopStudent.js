function findTopStudent(data) {
  return data.reduce((best, s) => (s.score > best.score ? s : best)).name;
}
module.exports = findTopStudent;