import React from 'react';

// Date picker with proprerties to get min value
function DatePicker(props) {
  return(
    <input name={props.name} 
      id={props.id}
      type={props.type}
      required
      value={props.value}
      min={props.min}
      onChange = {props.onChange}
      />
  );
}

export default DatePicker;