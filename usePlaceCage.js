const PLACECAGE_HOST = 'https://www.placecage.com/';
const TYPES = {
  calm: 'c',
  gracy: 'g',
  crazy: 'c',
  gif: 'gif'
};
const DEFAULT_TYPE = 'calm';
const ERROR_BASE = 'Failed to place Nick';
export default function usePlaceCage(settings = {}) {
  if (!isNaN(settings)) {
    return generateCage({
      width: arguments[0],
      height: arguments[1]
    });
  }

  if (Array.isArray(settings)) {
    return settings.map(s => generateCage(s));
  }

  return generateCage(settings);
}
/**
 * generateCage
 */

function generateCage(settings) {
  const {
    type = DEFAULT_TYPE,
    width = 200,
    height = 200,
    count = 1
  } = settings;
  const config = [];

  if (type !== DEFAULT_TYPE && TYPES.includes(type)) {
    config.push(type);
  }

  config.push(width, height);

  if (isNaN(count)) {
    throw new Error(`${ERROR_BASE}: Invalid count ${count}`);
  }

  return [...new Array(count)].map(() => `${PLACECAGE_HOST}${config.join('/')}`);
}