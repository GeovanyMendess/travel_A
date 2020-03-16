import React from 'react';


const masks = {
  // To remove double space in name, origin and destination
  maskName(string) {
    return(string.replace(/\s+/g, " ")); 
  },
  // To insert a specify format to phone
  maskPhone(stringTel) {
    stringTel=stringTel.replace(/\D/g,'');
    stringTel=stringTel.replace(/^(\d{2})(\d)/g,"($1) $2");
    stringTel=stringTel.replace(/(\d)(\d{4})$/,"$1-$2"); 
  
  // The phone must have 14 or 15 characters 
    if(stringTel.length>15) {
      stringTel=stringTel.replace(stringTel[15],'');
    }

    return(stringTel);
  },
  // Getting back the phone number
  removeMaskPhone(stringTel) {
    stringTel=stringTel.replace(/\D/g,'');
    return(stringTel);
  }
}

export default masks;