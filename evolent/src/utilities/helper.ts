export function getInitials(...rest) {
  let initials = rest[0].substring(0, 1).toUpperCase();

  if (rest.length > 1) {
    initials += rest[rest.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
}

export function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
}
