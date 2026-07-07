function SunMarkDraw() {
  return (
    <div className="sun-mark-draw" aria-hidden="true">
      <svg viewBox="0 0 700 260">
        <path
          className="draw-horizon"
          d="M40 214
            C105 190, 170 217, 245 222
            C305 226, 345 202, 392 202
            C450 203, 515 222, 585 210
            C620 204, 640 206, 660 213"
        />     
        <path className="draw-ray long" d="M350 132 L350 8" />
        <path className="draw-ray long" d="M314 132 L288 42" />
        <path className="draw-ray long" d="M282 148 L222 70" />
        <path className="draw-ray long" d="M256 173 L158 116" />
        <path className="draw-ray long" d="M244 195 L86 188" />

        <path className="draw-ray long" d="M386 132 L412 42" />
        <path className="draw-ray long" d="M418 148 L478 70" />
        <path className="draw-ray long" d="M444 173 L542 116" />
        <path className="draw-ray long" d="M456 195 L614 188" />

        <path className="draw-ray short" d="M328 128 L316 82" />
        <path className="draw-ray short" d="M372 128 L384 82" />
        <path className="draw-ray short" d="M304 140 L272 102" />
        <path className="draw-ray short" d="M396 140 L428 102" />
        <path className="draw-ray short" d="M278 160 L236 132" />
        <path className="draw-ray short" d="M422 160 L464 132" />

        <path className="draw-sun-fill" d="M263 196 A78 78 0 0 1 437 196 Z" />
        <path className="draw-sun-stroke" d="M263 196 A78 78 0 0 1 437 196" />
      </svg>
    </div>
  );
}

export default SunMarkDraw;