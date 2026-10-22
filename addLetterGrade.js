function addLetterGrade(data) {
  return data.map((s) => ({
    ...s,
    letter: s.score >= 90 ? "A" : s.score >= 75 ? "B" : "C",
  }));
}
module.exports = addLetterGrade;