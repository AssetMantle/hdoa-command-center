interface propsIf {
  active: boolean;
}

export default function RightSvg({ active }: propsIf) {
  return (
    <svg width="61" height="81" viewBox="0 0 61 81" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={`branch ${active ? "active" : ""}`} d="M5 0C5 40 55 40 55 80" strokeWidth="10" />
    </svg>
  );
}
