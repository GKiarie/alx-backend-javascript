export default function getListStudentIds(list) {
  if (!Array.isArray(list)) {
    return [];
  }
  const ids = list.map((obj) => obj.id);
  return ids;
}
