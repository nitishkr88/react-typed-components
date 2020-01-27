import moment from 'moment'

export const LONG_DATE_TIME_FORMAT = 'MMM D YYYY, h:mm A'
export const SHORT_DATE_TIME_FORMAT = 'M/DD h:mm A'

export function timeseriesLabelFormatter(
  timestamp: number,
  format = LONG_DATE_TIME_FORMAT
) {
  return moment(timestamp * 1000).format(format)
}
