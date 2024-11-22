interface propsIf {
  active: boolean;
}

export default function LeftSvg({ active }: propsIf) {
  return (
    <svg width="61" height="81" viewBox="0 0 61 81" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        className={`branch ${active ? "active" : ""}`}
        d="M55.4766 0.0234375C55.4766 40.0234 5.47656 40.0234 5.47656 80.0234"
        strokeWidth="10"
      />
    </svg>
  );
}
