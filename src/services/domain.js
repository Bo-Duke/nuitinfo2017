const BACK_URL = 'https://hidden-savannah-59901.herokuapp.com';

export const findMatchDomain = userId =>
  `${BACK_URL}/findRoute?userId=${userId}`;
export const postTripDomain = () => `${BACK_URL}/`;
