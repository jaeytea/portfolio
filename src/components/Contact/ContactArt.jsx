import React from "react";

/**
 * ContactArt
 * A scalable, transparent-background SVG illustration of a vintage rotary phone.
 *
 * Usage:
 *   import ContactArt from "./ContactArt";
 *   <ContactArt width={320} />
 */
export default function ContactArt({
  width = 320,
  className,
  title = "Vintage rotary telephone",
  ...props
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox="0 0 560 470"
      role="img"
      aria-label={title}
      className={className}
      {...props}
    >
      <title>{title}</title>
      <g fill="#000" stroke="#000" strokeLinecap="round" strokeLinejoin="round">
        {/* Handset */}
        <path d="M111 164 C119 145 135 136 161 130 C215 116 252 116 280 116 C308 116 345 116 399 130 C425 136 441 145 449 164 L466 215 C470 228 463 238 450 239 L383 231 C369 229 361 220 363 208 L369 183 C371 174 364 165 354 165 L342 165 L342 183 L218 183 L218 165 L206 165 C196 165 189 174 191 183 L197 208 C199 220 191 229 177 231 L110 239 C97 238 90 228 94 215 Z" />
        <path
          d="M111 164 C119 145 135 136 161 130 C215 116 252 116 280 116 C308 116 345 116 399 130 C425 136 441 145 449 164"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
        />
        <path d="M98 222 C126 216 158 211 194 202 L198 222 C174 236 128 245 104 238 C97 235 95 228 98 222 Z" />
        <path d="M362 222 L366 202 C402 211 434 216 462 222 C465 228 463 235 456 238 C432 245 386 236 362 222 Z" />
        <path
          d="M132 169 C151 168 169 182 179 201"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
        />
        <path
          d="M428 169 C409 168 391 182 381 201"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
        />
        <path d="M99 200 L107 177" fill="none" stroke="#fff" strokeWidth="2" />
        <path d="M461 200 L453 177" fill="none" stroke="#fff" strokeWidth="2" />

        {/* Upright handset supports */}
        <rect x="203" y="169" width="24" height="71" rx="9" />
        <rect x="333" y="169" width="24" height="71" rx="9" />

        {/* Main body */}
        <path d="M194 213 L366 213 C383 228 395 250 400 281 L414 356 C417 372 426 382 437 392 L437 432 C437 439 432 444 425 444 L135 444 C128 444 123 439 123 432 L123 392 C134 382 143 372 146 356 L160 281 C165 250 177 228 194 213 Z" />
        <path
          d="M177 243 C190 226 212 216 236 214 L324 214 C348 216 370 226 383 243"
          fill="none"
          stroke="#000"
          strokeWidth="8"
        />

        {/* Dial bezel */}
        <circle
          cx="280"
          cy="309"
          r="78"
          fill="#000"
          stroke="#fff"
          strokeWidth="3"
        />
        <circle
          cx="280"
          cy="309"
          r="68"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
        <circle
          cx="280"
          cy="309"
          r="34"
          fill="#000"
          stroke="#fff"
          strokeWidth="2.5"
        />

        {/* Rotary dial finger holes */}
        <g fill="#000" stroke="#fff" strokeWidth="2">
          <circle cx="306" cy="270" r="11" />
          <circle cx="279" cy="263" r="11" />
          <circle cx="253" cy="269" r="11" />
          <circle cx="235" cy="286" r="11" />
          <circle cx="226" cy="307" r="11" />
          <circle cx="229" cy="329" r="11" />
          <circle cx="245" cy="348" r="11" />
          <circle cx="268" cy="357" r="11" />
          <circle cx="291" cy="356" r="11" />
          <circle cx="313" cy="347" r="11" />
        </g>
        <g
          fill="#fff"
          stroke="none"
          fontFamily="Arial, Helvetica, sans-serif"
          fontSize="13"
          textAnchor="middle"
        >
          <text x="306" y="275">
            1
          </text>
          <text x="279" y="268">
            2
          </text>
          <text x="253" y="274">
            3
          </text>
          <text x="235" y="291">
            4
          </text>
          <text x="226" y="312">
            5
          </text>
          <text x="229" y="334">
            6
          </text>
          <text x="245" y="353">
            7
          </text>
          <text x="268" y="362">
            8
          </text>
          <text x="291" y="361">
            0
          </text>
          <text x="313" y="352">
            1
          </text>
        </g>

        {/* Dial finger-stop */}
        <path
          d="M316 332 C326 339 334 342 342 342 C339 351 334 356 328 352 L316 332 Z"
          fill="#fff"
          stroke="#fff"
          strokeWidth="1"
        />

        {/* Base lip and feet */}
        <path d="M129 394 C185 389 375 389 431 394 L431 438 C431 442 428 444 424 444 L136 444 C132 444 129 442 129 438 Z" />
        <path d="M167 444 L167 451 C167 455 171 458 175 458 L212 458 C216 458 219 455 219 451 L219 444 Z" />
        <path d="M341 444 L341 451 C341 455 344 458 348 458 L385 458 C389 458 393 455 393 451 L393 444 Z" />
        <path
          d="M141 396 C211 392 349 392 419 396"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
      </g>
    </svg>
  );
}
