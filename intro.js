import { map, tail, times, uniq } from 'lodash';

const randNumber = () => {
  return Match.round(Match.random() * 100);
}

const sampleNumbers = _.times(5, randNumber);

console.log(sampleNumbers);