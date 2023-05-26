import React from 'react';
import { Container, Row } from 'react-bootstrap';
import EmpleadoAvatar from './EmpleadoAvatar';

const EmpleadoList = () => {
  const empleados = [
    { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "https://www.shutterstock.com/image-vector/woman-avatar-person-female-vector-260nw-2011358720.jpg" },
    { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "https://www.shutterstock.com/image-vector/avatar-woman-icon-600w-1055677001.jpg" },
    { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "https://www.shutterstock.com/image-vector/businesswoman-profile-avatar-character-600w-758165059.jpg" },
    { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "https://www.shutterstock.com/image-vector/young-male-profile-cartoon-isolated-600w-448666324.jpg" },
    { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "https://www.shutterstock.com/image-vector/young-man-avatar-character-600w-734729068.jpg" },
    { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "https://www.shutterstock.com/image-vector/girl-face-flat-illustration-female-600w-1718781673.jpg" },
    { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "https://www.shutterstock.com/image-vector/abstract-profile-picture-woman-beautiful-600w-316158116.jpg" },
    { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "https://www.shutterstock.com/image-vector/young-woman-shirtless-avatar-character-600w-641197555.jpg" },
    { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "https://www.shutterstock.com/image-vector/businessman-character-avatar-icon-600w-525163792.jpg" }
  ];

  return (
    <Container>
      <h1 className="text-center my-5">Lista de Empleados</h1>
      <div className="empleado-list">
        {empleados.map((empleado) => (
          <div key={empleado.id} className="empleado-item">
            <div className="empleado-avatar">
              <EmpleadoAvatar pic={empleado.pic} />
            </div>
            <div className="empleado-info">
              <h4>{empleado.fullName}</h4>
              <p>{empleado.title}</p>
              <p className="text-success fw-bold">{empleado.department}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default EmpleadoList;