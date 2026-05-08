import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

/** Professional experience start: January 1, 2022 */
const CAREER_START_MS = new Date(2022, 0, 1).getTime()
const MS_PER_YEAR = 365.25 * 24 * 60 * 60 * 1000

/**
 * Fractional years from career start (Jan 1, 2022) to referenceDate.
 */
export function getYearsSinceCareerStart(referenceDate = new Date()) {
  const elapsed = referenceDate.getTime() - CAREER_START_MS
  return Math.max(0, elapsed / MS_PER_YEAR)
}

/** For sentences, e.g. "4.3 years" */
export function getCareerYearsNumberString(decimals = 1) {
  return getYearsSinceCareerStart().toFixed(decimals)
}

/** For emphasis badges, e.g. "4.3+" */
export function getCareerYearsPlusLabel(decimals = 1) {
  return `${getCareerYearsNumberString(decimals)}+`
}
