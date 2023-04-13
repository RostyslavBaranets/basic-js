const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  /*console.log(Math.log10(MODERN_ACTIVITY/Number(sampleActivity) )*(1/HALF_LIFE_PERIOD));
  sampleActivity = parseFloat(sampleActivity);
  if(typeof parseFloat(sampleActivity) == 'number')

    return Math.log10(MODERN_ACTIVITY/sampleActivity)*(1/HALF_LIFE_PERIOD);
  else return false;*/

  if (typeof sampleActivity !== 'string' || isNaN(sampleActivity) || !sampleActivity.trim()){
    return false
  }

  const activity = parseFloat(sampleActivity);

  if (typeof sampleActivity == 'NaN'){
    return false
  }

  if(activity <= 0 || activity >= MODERN_ACTIVITY){
    return false;
  }

  return Math.ceil(Math.log(MODERN_ACTIVITY / activity) / (0.693 / HALF_LIFE_PERIOD));
}

module.exports = {
  dateSample
};
