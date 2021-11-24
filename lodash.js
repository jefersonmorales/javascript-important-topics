randNumber = () => {
  return Match.round(Match.random() * 100);
}

const sampleNumbers = _.times(n, iteratee)(5, randNumber);

console.log(sampleNumbers) 