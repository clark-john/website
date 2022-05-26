import moment from 'moment'

const month: string = moment(Date.now()).format('MMM')
const day: any = moment(Date.now()).format('DD')
const year: any = moment(Date.now()).format('YYYY')

const pastMonths: string[] = ['January', 'February', 'March' ]

let myAge: any = year - 2006

if (pastMonths.includes(month)) {
	myAge = myAge - 1	
} else if (year < 2006) {
	myAge = "Invalid age"
} else {
	
	if (day >= 19 ) {
		myAge
	} else {
		if (month == 'April') {
			myAge = myAge - 1
		}
	}
}

export default myAge