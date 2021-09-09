var isPositiveInteger = function (value, onSuccess, onError) {
  if (value > 0) {
    onSuccess();
  } else {
    onError();
  }
};

function success() {
  console.log("is positive");
}
function error() {
  console.log("is negative");
}

isPositiveInteger(5, success, error);
