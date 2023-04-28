export const crudInfo = (userInfo) => {
  localStorage.setItem('user', JSON.stringify(userInfo));
}

export const getInfo = () => {
  const data = localStorage.getItem('user');
  return data === null ? [] : JSON.parse(data);
}