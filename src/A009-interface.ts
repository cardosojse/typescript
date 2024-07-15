interface Rectangle {
  height: number;
  width: number;
}

interface Colored_Rectangle extends Rectangle {
  color: string;
}

const coloredRectangle: Colored_Rectangle = {
  height: 20,
  width: 30,
  color: 'red',
};

console.log(coloredRectangle);
