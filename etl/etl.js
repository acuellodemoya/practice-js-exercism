
export const transform = (object) => {
  
  let respone = {};

  for(let element in object) {
      let aux = object[element];
      for(let i = 0; i < aux.length; i++) {
        respone[aux[i].toLowerCase()] = parseInt(element);
      }
  }

  return respone;
};
