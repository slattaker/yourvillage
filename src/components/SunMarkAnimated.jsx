import sunMarkSvg from "../assets/sun-mark.svg?raw";

function SunMarkAnimated() {
  return (
    <div className="sun-mark-animated" aria-hidden="true">
      <div
        className="sun-mark-svg"
        dangerouslySetInnerHTML={{ __html: sunMarkSvg }}
      />
    </div>
  );
}

export default SunMarkAnimated;