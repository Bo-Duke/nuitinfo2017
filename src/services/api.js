import { findMatchDomain, postTripDomain } from './domain';

export const findMatch = userId => {
  const myInit = {
    method: 'GET',
    mode: 'cors',
  };

  fetch(findMatchDomain(userId), myInit)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
};

export const postTrip = (userId, origin, destination) => {
  const body = JSON.stringify({
    userId,
    pendingSam: true,
    pendingDrunk: false,
    matchedWith: 0,
    origin,
    destination,
  });

  const myInit = {
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    method: 'POST',
    mode: 'cors',
    body,
  };

  fetch(postTripDomain(userId), myInit)
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
};

// var myHeaders = new Headers();

// var myInit = { method: 'GET',
//                headers: myHeaders,
//                mode: 'cors',
//                cache: 'default' };

// fetch('flowers.jpg', myInit).then(function(response) {
//   return response.blob();
// }).then(function(myBlob) {
//   var objectURL = URL.createObjectURL(myBlob);
//   myImage.src = objectURL;
// });
