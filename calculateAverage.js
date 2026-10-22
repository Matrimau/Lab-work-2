function calculateAverage(data) {
  return data.reduce((sum, s) => sum + s.score, 0) / data.length;
}
module.exports = calculateAverage;