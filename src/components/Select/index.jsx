import React, { useMemo } from 'react';

const Select = (props) => {
  const { onChange, value, options } = props;

  const renderOptions = useMemo(() => {
    return options.map((item) => (
      <option key={item.value} value={item.value}>{item.label}</option>
    ))
  }, [options])

  return (
    <select onChange={onChange} value={value}>
      {renderOptions}
    </select>
  )
}

export default Select;
