import sunMarkSvg from "../assets/sun-mark.svg?raw";

function SunMark() {
  return (
    <div
      className="intro-sun-mark"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: sunMarkSvg }}
    />
  );
}

export default SunMark;