/* SELECTORS */

export const getAllCountries = ({countries}) => countries;
export const getCountryByCode = ({countries}, countryCode) => countries[countryCode];

/* ACTIONS */


// action name creator
const reducerName = 'countries';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const COUNTRY_FILTER = createActionName('COUNTRY_FILTER');

// action creators
export const countryFilter = payload => ({
  payload,
  type: COUNTRY_FILTER,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case COUNTRY_FILTER:
      return action.payload;
    default:
      return statePart;
  }
}

