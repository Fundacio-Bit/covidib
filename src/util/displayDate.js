import moment from 'moment'

function displayDate(ISODate) {
  return moment(ISODate).format('D MMM')
}

export default displayDate
