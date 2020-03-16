import React from 'react';


const masks = {
  // To remove double space in name, origin and destination
  maskName(string) {
    return(string.replace(/\s+/g, " ")); 
  },
  // Getting back the phone number
  removeMaskPhone(stringTel) {
    stringTel=stringTel.replace(/\D/g,'');
    return(stringTel);
  }
}
export default masks;