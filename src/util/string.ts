export const getFirstWord = (value: string): string => {
  if (!value) return '';

  const [firstWord] = value.split(' ');
  return firstWord;
};

export const getInitials = (fullname: string): string => {
  if (!fullname) return '';

  const initials = fullname
    .split(' ')
    .map(e => e.split('')[0])
    .filter((i, k, o) => k === 0 || k === o.length - 1)
    .join('');

  return initials;
};

export const getFirstAndLastName = (fullName: string): string => {
  if (!fullName) return '';

  const peaces = fullName.split(' ');

  return `${peaces[0]} ${peaces[peaces.length - 1]}`;
};
