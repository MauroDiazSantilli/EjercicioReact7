import React from 'react';

const EmpleadoRow = ({ fullName, title, department }) => {
  return (
    <div className="empleado-row">
      <h4>{fullName}</h4>
      <p>{title}</p>
      <p>{department}</p>
    </div>
  );
};

export default EmpleadoRow;