/* SELECTORS */

export const getAllRegions = ({regions}) => regions;
export const getRegion = ({regions}, regionCode) => regions[regionCode];

/* ACTIONS */


// action name creator
const reducerName = 'regions';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const REGIONS_FILTER = createActionName('REGIONS_FILTER');

// action creators
export const regionsFilter = payload => ({
  payload,
  type: REGIONS_FILTER,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case REGIONS_FILTER:
      return action.payload;
    default:
      return statePart;
  }
}

