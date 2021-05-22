//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (number) => {
  
  if(number < 1){
    throw new Error('Classification is only possible for natural numbers.');
  }

  let sumaFactores = 0;

  for(let i = 0; i < number; i++) {
    if(number % i === 0 ) sumaFactores += i;
  }

  if (sumaFactores === number) return 'perfect';
  if (sumaFactores < number) return 'deficient';
  if (sumaFactores > number) return 'abundant';

};
