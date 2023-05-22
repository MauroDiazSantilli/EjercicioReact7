import React from 'react';

const EmpleadoAvatar = ({ pic }) => {
  return (
    <div className="empleado-avatar">
      <img src={pic} alt="AvatardeEmpleado" className="img-fluid" />
    </div>
  );
};

export default EmpleadoAvatar;