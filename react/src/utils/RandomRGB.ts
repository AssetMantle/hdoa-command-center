export default function RandomRGB() {
  const R = Math.floor(Math.random() * (255 - 1 + 1) - 1);
  const G = Math.floor(Math.random() * (255 - 1 + 1) - 1);
  const B = Math.floor(Math.random() * (255 - 1 + 1) - 1);
  return `rgba(${R}, ${G}, ${B}, 1)`;
}
