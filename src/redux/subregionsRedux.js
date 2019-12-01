/* SELECTORS */

export const getAllSubregions = ({subregions}) => subregions;
export const getSubregion = ({subregions}, subregionCode) => subregions[subregionCode];

/* ACTIONS */


// action name creator
const reducerName = 'subregions';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SUBREGIONS_FILTER = createActionName('SUBREGIONS_FILTER');

// action creators
export const subregionsFilter = payload => ({
  payload,
  type: SUBREGIONS_FILTER,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case SUBREGIONS_FILTER:
      return action.payload;
    default:
      return statePart;
  }
}

