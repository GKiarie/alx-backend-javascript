import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const arr = [];

  const size1 = new ClassRoom(19);
  arr.push(size1);
  const size2 = new ClassRoom(20);
  arr.push(size2);
  const size3 = new ClassRoom(34);
  arr.push(size3);

  return arr;
}
