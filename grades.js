const mockGrades = [
  { assignment: 'The Price is Right', student: 'Shondra', score: 85 },
  { assignment: 'TV Synopsis', student: 'Evelyn', score: 88 },
  { assignment: 'Order Book', student: 'Steve', score: 100 },
  { assignment: 'TDD Strict Equality', student: 'Jamal', score: 98 },
  { assignment: 'The Price is Right', student: 'Evelyn', score: 89 },
  { assignment: 'Fantasy Scoring', student: 'Jamal', score: 95 },
  { assignment: 'TDD Strict Equality', student: 'Steve', score: 87 },
  { assignment: 'TV Synopsis', student: 'Steve', score: 88 },
  { assignment: 'Fantasy Scoring', student: 'Shondra', score: 96 },
  { assignment: 'TDD Strict Equality', student: 'Evelyn', score: 96 },
  { assignment: 'Fantasy Scoring', student: 'Evelyn', score: 98 },
  { assignment: 'Order Book', student: 'Shondra', score: 78 },
  { assignment: 'The Price is Right', student: 'Jamal', score: 96 },
  { assignment: 'Order Book', student: 'Jamal', score: 100 },
  { assignment: 'The Price is Right', student: 'Steve', score: 90 },
  { assignment: 'TV Synopsis', student: 'Shondra', score: 100 },
  { assignment: 'TDD Strict Equality', student: 'Shondra', score: 92 },
  { assignment: 'Order Book', student: 'Evelyn', score: 100 },
  { assignment: 'Fantasy Scoring', student: 'Steve', score: 93 },
  { assignment: 'TV Synopsis', student: 'Jamal', score: 98 },
]

const calculateAverageByAssignment = (arr) => {

  //return arr.map((assignmentName) => assignmentName.assignment)
}

//console.log(calculateAverageByAssignment(mockGrades))

const assignmentName = mockGrades.reduce((acc, mockGrade) => {
  const { assignment, score } = (mockGrade)
  acc[score] = acc[score] ? acc[score].concat([assignment]) : [score]
  return acc
}, {})

console.log(assignmentName)


//Helper fuctions

// Get assignment
function hasAssignment(item) {
  return item.assignment > 0
}

// get scorces /calculate average 
function scoreAverage(arr) {
  //Assignment scores total/items.length
  return arr.map((scoreArr) => scoreArr.score)


}
// Simple MAP
/*
onst students = [
  { name: 'Steve', gpa: 3.5, gradYear: 2020 },
  { name: 'Mary', gpa: 4.0, gradYear: 2021 },
  { name: 'Tasha', gpa: 3.8, gradYear: 2022 },
  { name: 'Edgar', gpa: 3.2, gradYear: 2020 },
]

const names = students.map((student) => student.name)

console.log(names)

*/

/*
const items = [{
  id: 1, name: 'iPhone Charger', price: 19.95, discount: .12, quantity: 2,
}, {
  id: 2, name: 'Video Adapter', price: 12.95, discount: .10, quantity: 1,
}, {
  id: 3, name: 'MacBook Charger', price: 51.95, discount: 0, quantity: 0,
}]

-----function hasQuantity(item) {
 ------ return item.quantity > 0-
-----------}

function calculateItemTotal(item) {
  const unformattedTotal = item.price * (1 - item.discount) * item.quantity
  const total = parseInt(unformattedTotal * 100) / 100

  return { ...item, total }
}

function sumItem(acc, item) {
  return acc + item.total
}

const orderTotal = items.filter(hasQuantity).map(calculateItemTotal).reduce(sumItem, 0)

console.log(orderTotal)


*/
module.exports = calculateAverageByAssignment