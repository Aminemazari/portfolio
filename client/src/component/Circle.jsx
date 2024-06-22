import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CircleWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #2ecc71;
  position: absolute;
  pointer-events: none;
  z-index:-1;
`;

const Circle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <CircleWrapper style={{ left: `${position.x}px`, top: `${position.y}px` }} />
  );
};

export default Circle;
