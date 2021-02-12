const button = document.querySelector("button");
const output = document.querySelector("p");

// Promise
const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {},

      (error) => {
        reject(error);
      },
      (opts) => {}
    );
  });
  return promise;
};
const setTimer = function (duration) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done");
    }, duration);
  });
  return promise;
};

//let positionData;

async function trackUserHandeler() {
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch (error) {
    console.log(error);
  }
  console.log(timerData, posData);

  // positionData = posData;
  // getPosition()
  //   .then(
  //     (posData) => {
  //       positionData = posData;
  //       return setTimer(2000);
  //     }

  //     // ,(err) => {
  //     //   console.log(err);
  //     //   return "the rest script goes on  !";
  //     // }
  //   )
  //   .catch((err) => {
  //     console.log(err);
  //     return "the rest script goes on!";
  //   })
  //   .then((data) => {
  //     console.log(data, positionData);
  //   });

  // setTimer(1000).then(() => {
  //   console.log("Timer done");
  // });
}

// Promise.race([getPosition(), setTimer(1000)]).then((data) => {
//   console.log(data);
// });

// Promise.all([getPosition(), setTimer(1000)]).then((promiseData) => {
//   console.log(promiseData);
// });


Promise.allsettled([getPosition(), setTimer(1000)]).then((promiseData) => {
  console.log(promiseData);






  
button.addEventListener("click", trackUserHandeler);
