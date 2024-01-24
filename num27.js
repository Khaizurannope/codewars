function countGrade(scores) {
    const gradeCount = {
      S: 0,
      A: 0,
      B: 0,
      C: 0,
      D: 0,
      X: 0
    };

    scores.forEach(score => {
      if (score === 100) {
        gradeCount.S++;
      } else if (score < 100 && score >= 90) {
        gradeCount.A++;
      } else if (score < 90 && score >= 80) {
        gradeCount.B++;
      } else if (score < 80 && score >= 60) {
        gradeCount.C++;
      } else if (score < 60 && score >= 0) {
        gradeCount.D++;
      } else if (score === -1) {
        gradeCount.X++;
      }
    });
  
    return gradeCount;
  }

console.log(countGrade([50,60,70,80,90,100]));
console.log(countGrade([65,75,,85,85,95,100,100]));
console.log(countGrade([-1,-1,-1,-1,-1,-1]));
  