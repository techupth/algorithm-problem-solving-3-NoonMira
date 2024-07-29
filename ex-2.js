function sortStudentsByScore(students) {
  let length = students.length
  let swap = true
  while (swap) {
    swap = false
    for(let i = 0; i<length-1 ; i++) {
      if (students[i].score>students[i+1].score) {
        let temp = students[i]
        students[i] = students[i+1]
        students[i+1] = temp
        swap = true
      }
    }
    
    
  }
  return students
}
let students = [
  { id: "S001", name: "Anan", score: 85 },
  { id: "S002", name: "Boon", score: 92 },
  { id: "S003", name: "Chai", score: 78 },
  { id: "S004", name: "Dao", score: 95 },
  { id: "S005", name: "Ek", score: 88 },
  { id: "S006", name: "Fah", score: 80 }
];
console.log(sortStudentsByScore(students))