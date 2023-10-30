'use client'

// date-fns is a modern JavaScript date utility library
// https://date-fns.org/
import { parseISO, format } from 'date-fns'

/**
 * Date component to display a formatted date.
 *
 * @param {Object} props - The properties for the Date component.
 * @param {string} props.dateString - The date in string format to be formatted and displayed.
 * @return {JSX.Element} The JSX component displaying the formatted date.
 */
export default function Date({ dateString }) {
    if (!dateString) {
        return null; // Return nothing if dateString is not provided or empty.
    }

    const date = parseISO(dateString)

    if (isNaN(date)) {
        return null; // Return nothing if parsing fails.
    }

    return <time dateTime={dateString}>{format(date, 'LLL d, yyyy')}</time>
    // view different format() string options here:
    // https://date-fns.org/v2.16.1/docs/format
}