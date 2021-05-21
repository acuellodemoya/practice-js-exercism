//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colors) => {
  let color1 = colors[0].toLowerCase();
  let color2 = colors[1].toLowerCase();
  return parseInt(`${COLORS.indexOf(color1)}${COLORS.indexOf(color2)}`);
};

export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];
