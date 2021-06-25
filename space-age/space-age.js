const planets = {
  'earth': 31557600,
  'mercury': (31557600 * 0.2408467),
  'venus': (31557600 * 0.61519626),
  'mars': (31557600 * 1.8808158),
  'jupiter': (31557600 * 11.862615),
  'saturn': (31557600 * 29.447498),
  'uranus': (31557600 * 84.016846),
  'neptune': (31557600 * 164.79132)
};

export const age = (planet, time) => {
  if(planet == 'earth' ){
    return parseFloat((time / planets.earth).toFixed(2));
  }else if(planet == 'mercury' ){
    return parseFloat((time / planets.mercury).toFixed(2));
  }else if(planet == 'venus'){
    return parseFloat((time / planets.venus).toFixed(2));
  }else if(planet == 'mars'){
    return parseFloat((time / planets.mars).toFixed(2));
  }else if(planet == 'jupiter'){
    return parseFloat((time / planets.jupiter).toFixed(2));
  }else if(planet == 'saturn'){
    return parseFloat((time / planets.saturn).toFixed(2));
  }else if(planet == 'uranus'){
    return parseFloat((time / planets.uranus).toFixed(2));
  }else if(planet == 'neptune'){
    return parseFloat((time / planets.neptune).toFixed(2));
  }
};
