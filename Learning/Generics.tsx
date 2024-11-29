// generics is used to write a resueable code by passing the type to be passed as a parameter

function typeee<T>(value: T) {
  return value;
}
typeee <string>"helo";
typeee <number>42;
