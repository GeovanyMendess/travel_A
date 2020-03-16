// Required to export components
import React from 'react';

const masks = {
  // To remove double space in name, origin and destination
  maskName(string) {
    return(string.replace(/\s+/g, " ")); 
  },
}
export default masks;