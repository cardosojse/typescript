enum cardinalDirections {
  North = 1,
  East,
  South,
  West,
}

const currentDirection = cardinalDirections.South;
console.log(currentDirection);

enum StatusCode {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

console.log(StatusCode.NotFound);
