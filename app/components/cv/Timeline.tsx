"use client";

import { ReactElement, useState } from "react";
import Image from "next/image";

export const TimelineMarker = () => {
  return (
    <div className="absolute -start-2.5 h-5 w-5 rounded-full bg-sage-600 ring-4 ring-cream-50" />
  );
};

export const TimelineItem = ({
  title,
  company,
  technologies,
  startDate,
  endDate,
  bulletPoints = [],
  logoSrc,
}: {
  title: string;
  company: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  bulletPoints?: string[];
  logoSrc?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-dgray-900 flex gap-1 flex-col gap-2 rounded-lg bg-cream-50 shadow-sm ring-1 ring-sage-200 p-4">
      <h3 className="font-semibold text-dgray-900">{title}</h3>
      <div className="flex justify-between">
        <p className="text-sm text-dgray-700 flex items-center gap-1">
          {logoSrc && (
            <span className="inline-flex h-5 w-5 overflow-hidden rounded-sm bg-cream-50">
              <Image
                src={logoSrc}
                alt={`${company} logo`}
                width={16}
                height={16}
                className="object-contain"
              />
            </span>
          )}
          {company}
        </p>
        <span className="text-sm text-dgray-700">
          {startDate} – {endDate}
        </span>
      </div>
      <p className="text-sm text-dgray-800">
        <span className="font-semibold">Key Technologies:</span>{" "}
        {technologies.join(", ")}
      </p>

      {bulletPoints.length > 0 && (
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center pt-2 gap-2 text-sm font-medium text-dgray-700 hover:text-dgray-900 transition-colors"
            aria-expanded={isOpen}
            aria-controls={`accordion-content-${title.replace(/\s+/g, "-")}`}
          >
            <span>{isOpen ? "Hide" : "Show"} details</span>
            <svg
              className={`w-4 h-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isOpen && (
            <div
              id={`accordion-content-${title.replace(/\s+/g, "-")}`}
              className="pl-4 space-y-2"
            >
              <ul className="list-disc space-y-1 text-sm pt-3 text-dgray-800">
                {bulletPoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
