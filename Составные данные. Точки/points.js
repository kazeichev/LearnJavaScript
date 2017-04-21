/*
Реализуйте и экспортируйте следующие функции:
  quadrant - функция, которая вычисляет 
    квадрант, в котором находится точка. 
    Ниже приведена схема, показывающая номера 
    квадрантов на плоскости.
  symmetricalPoint - функция, возвращающая 
    новую точку, симметричную относительно 
    начала координат. Такая симметричность 
    означает, что меняются знаки у x и y.
  distance - функция, вычисляющая расстояние 
    между точками по формуле: 
    d = sqrt((x2−x1)^2+(y2−y1)^2)

*/
import { makePoint, getX, getY } from 'hexlet-points';

export const quadrant = (point) => {
  let x = getX(point);
  let y = getY(point);

  if (x > 0 && y > 0) {
    return 1;
  }
  else if (x < 0 && y > 0) {
    return 2;
  }
  else if (x < 0 && y < 0) {
    return 3;
  }
  else if (x > 0 && y < 0) {
    return 4;
  }
  else {
    return null;
  }
};

export const symmetricalPoint = (point) =>
    makePoint(-getX(point), -getY(point));

export const distance = (point, point2) => {
  let x1 = getX(point);
  let y1 = getY(point);
  let x2 = getX(point2);
  let y2 = getY(point2);
  const d = Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2));
  return d;
};
