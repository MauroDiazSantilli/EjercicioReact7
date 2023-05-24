import React from 'react';
import { Image } from 'react-bootstrap';

const EmpleadoAvatar = ({ pic }) => {
  return (
    <div className="empleado-avatar">
      <Image src={pic} alt="AvatardeEmpleado" fluid />
    </div>
  );
};

export default EmpleadoAvatar;