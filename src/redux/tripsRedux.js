// import { parseOptionPrice } from '../utils/parseOptionPrice';

/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration
  if(filters.duration){
    output = output.filter(trip => filters.duration.from < trip.days && trip.days < filters.duration.to);
  }

  // TODO - filter by tags
  if(filters.tags){
    const pattern = new RegExp(filters.tags, 'i');
    output = output.filter(trip => pattern.test(trip.tags));
  }

  // TODO - sort by cost descending (most expensive goes first) - fix my later
  // output = output.map(
  //   trip => { trip.cost = parseOptionPrice(trip.cost).value; return trip;
  //   })
  //   .sort((tripA, tripB) => {
  //     return tripB.cost - tripA.cost;
  //   });

  return output;
};

export const getTripById = ({trips}, tripId) => {
  // const filtered = trips;

  // TODO - filter trips by tripId
  const filtered = trips.filter(trip => trip.id === tripId);
  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips;

  // TODO - filter trips by countryCode
  filtered.filter(trip => trip.countryCode === countryCode);
  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */


// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const TRIPS_FILTER = createActionName('TRIPS_FILER');

// action creators
export const tripsFilter = payload => ({
  payload,
  type: TRIPS_FILTER,
});

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TRIPS_FILTER:
      return action.payload;
    default:
      return statePart;
  }
}
 
